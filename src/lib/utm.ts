/**
 * Campaign attribution for the Ski4U booking pages.
 *
 * 1. On landing, the visitor's campaign tags are read from the URL: the five utm_* tags,
 *    utm_id and the ad-platform click IDs (gclid, fbclid, yclid, ...). Without tags, the
 *    source is worked out from the referring site (Instagram, Telegram, Google, ...) or the
 *    in-app browser.
 * 2. The tags are remembered while the visitor browses, and for 30 days once they accept
 *    statistics or marketing cookies in the Cookiebot banner.
 * 3. Every link to ski4u.com carries the tags (set when the page renders and again when the
 *    link is clicked, so it works for links anywhere on the site). Missing tags are filled
 *    with defaults so Ski4U can always see the visit came from Native Code.
 * 4. Each click on a Ski4U link is reported to Google Tag Manager (event "ski4u_click") and,
 *    for room bookings, to the Meta Pixel (InitiateCheckout with the price).
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
] as const;

/** Ad-platform click IDs: Google Ads, Meta, Yandex Direct, TikTok, Microsoft Ads. */
const CLICK_ID_KEYS = ["gclid", "gbraid", "wbraid", "fbclid", "yclid", "ttclid", "msclkid"];

type Tags = Record<string, string>;

const STORAGE_KEY = "nc_utm";
const TTL_MS = 30 * 24 * 60 * 60 * 1000;
const CAMPAIGN = "ski_finale_2027";
const SKI4U_HOST = /(^|\.)ski4u\.com$/i;

const DEFAULT_TAGS: Tags = {
  utm_source: "nativecode.club",
  utm_medium: "referral",
  utm_campaign: CAMPAIGN,
};

/** Medium to assume when a link has a source but no medium (e.g. ?utm_source=inst). */
const MEDIUM_BY_SOURCE: Record<string, string> = {
  inst: "social",
  insta: "social",
  ig: "social",
  instagram: "social",
  fb: "social",
  facebook: "social",
  linkedin: "social",
  youtube: "social",
  tiktok: "social",
  vk: "social",
  tg: "messenger",
  telegram: "messenger",
  wa: "messenger",
  whatsapp: "messenger",
  email: "email",
  newsletter: "email",
};

/** Referring sites we can name: [host pattern, source, medium]. */
const REFERRERS: [RegExp, string, string][] = [
  [/(^|\.)instagram\.com$/, "instagram", "social"],
  [/(^|\.)(facebook\.com|fb\.com|fb\.me)$/, "facebook", "social"],
  [/(^|\.)(t\.me|telegram\.org|telegram\.me)$/, "telegram", "messenger"],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, "whatsapp", "messenger"],
  [/(^|\.)(linkedin\.com|lnkd\.in)$/, "linkedin", "social"],
  [/(^|\.)(youtube\.com|youtu\.be)$/, "youtube", "social"],
  [/(^|\.)tiktok\.com$/, "tiktok", "social"],
  [/(^|\.)(vk\.com|vk\.ru)$/, "vk", "social"],
  [/(^|\.)google\.[a-z.]+$/, "google", "organic"],
  [/(^|\.)(yandex\.[a-z.]+|ya\.ru)$/, "yandex", "organic"],
  [/(^|\.)bing\.com$/, "bing", "organic"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo", "organic"],
];

type Saved = { tags: Tags; at: number };

let memory: Saved | null = null;

const clean = (v: string) => v.trim().slice(0, 200);

function fromSearch(search: string): Tags {
  const params = new URLSearchParams(search);
  const tags: Tags = {};
  for (const k of [...UTM_KEYS, ...CLICK_ID_KEYS]) {
    const v = params.get(k);
    if (v && clean(v)) tags[k] = clean(v);
  }
  return tags;
}

const hasTags = (t: Tags) => Object.keys(t).length > 0;

/** Source from the referring site, or from the in-app browser when there is no referrer. */
function fromReferrer(referrer: string, ua: string): Tags {
  let host = "";
  try {
    host = referrer ? new URL(referrer).hostname.toLowerCase() : "";
  } catch {
    /* malformed referrer */
  }
  if (host && host !== window.location.hostname && !/(^|\.)nativecode\.club$/.test(host)) {
    for (const [re, source, medium] of REFERRERS) {
      if (re.test(host)) return { utm_source: source, utm_medium: medium };
    }
    return { utm_source: host.replace(/^www\./, ""), utm_medium: "referral" };
  }
  if (!host) {
    if (/Instagram/i.test(ua)) return { utm_source: "instagram", utm_medium: "social" };
    if (/FBAN|FBAV|FB_IAB/i.test(ua)) return { utm_source: "facebook", utm_medium: "social" };
  }
  return {};
}

/** Fill gaps so Ski4U always gets a complete source / medium / campaign set. */
function complete(tags: Tags): Tags {
  const out = { ...tags };
  if (!out.utm_source) {
    if (out.gclid || out.gbraid || out.wbraid)
      Object.assign(out, { utm_source: "google", utm_medium: "cpc" });
    // Meta adds fbclid to organic Instagram/Facebook links too, so it doesn't mean "paid".
    else if (out.fbclid) Object.assign(out, { utm_source: "facebook", utm_medium: "social" });
    else if (out.yclid) Object.assign(out, { utm_source: "yandex", utm_medium: "cpc" });
    else if (out.ttclid) Object.assign(out, { utm_source: "tiktok", utm_medium: "paid_social" });
    else if (out.msclkid) Object.assign(out, { utm_source: "bing", utm_medium: "cpc" });
    else out.utm_source = DEFAULT_TAGS.utm_source;
  }
  if (!out.utm_medium)
    out.utm_medium = MEDIUM_BY_SOURCE[out.utm_source.toLowerCase()] ?? "referral";
  if (!out.utm_campaign) out.utm_campaign = CAMPAIGN;
  return out;
}

// ---- storage: per tab until consent, 30 days after consent ----

type CookiebotWindow = Window & {
  Cookiebot?: { consent?: { statistics?: boolean; marketing?: boolean } };
  dataLayer?: unknown[];
  fbq?: (...args: unknown[]) => void;
};

function hasConsent(): boolean {
  const c = (window as CookiebotWindow).Cookiebot?.consent;
  return !!(c && (c.statistics || c.marketing));
}

function readStore(store: Storage | undefined): Saved | null {
  try {
    const raw = store?.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { tags?: Tags; utm?: Tags; at?: number };
    const tags = v.tags ?? v.utm; // `utm` was the first version's field name
    if (tags && v.at && Date.now() - v.at < TTL_MS) return { tags, at: v.at };
  } catch {
    /* storage blocked or unreadable */
  }
  return null;
}

function writeStore(store: Storage | undefined, saved: Saved) {
  try {
    store?.setItem(STORAGE_KEY, JSON.stringify(saved));
  } catch {
    /* storage blocked: the in-memory copy still applies */
  }
}

function session(): Storage | undefined {
  try {
    return window.sessionStorage;
  } catch {
    return undefined;
  }
}

function local(): Storage | undefined {
  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

function save(tags: Tags) {
  memory = { tags, at: Date.now() };
  writeStore(session(), memory);
  if (hasConsent()) writeStore(local(), memory);
}

function saved(): Saved | null {
  return memory ?? readStore(session()) ?? readStore(local());
}

/**
 * Read the landing URL and referrer. Call once on app start, before the router runs.
 * Tags in the URL always replace older ones; a source guessed from the referrer is only
 * used when nothing is remembered yet, so a page reload keeps the original campaign.
 */
export function captureUtm(
  search: string = typeof window !== "undefined" ? window.location.search : "",
) {
  if (typeof window === "undefined") return;
  const fromUrl = fromSearch(search);
  if (fromUrl.utm_source || fromUrl.utm_campaign) {
    save(fromUrl);
  } else if (hasTags(fromUrl)) {
    // Only click IDs (e.g. fbclid): take the source from the referrer where we can.
    save({ ...fromReferrer(document.referrer, navigator.userAgent), ...fromUrl });
  } else if (!saved()) {
    const guessed = fromReferrer(document.referrer, navigator.userAgent);
    if (hasTags(guessed)) save(guessed);
  } else {
    memory = saved();
  }

  // Keep the tags for 30 days once cookies are accepted; drop them if consent is withdrawn.
  window.addEventListener("CookiebotOnAccept", () => {
    const s = saved();
    if (s && hasConsent()) writeStore(local(), s);
  });
  window.addEventListener("CookiebotOnDecline", () => {
    try {
      local()?.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  });
}

/** This visitor's tags, completed with defaults. */
export function getUtm(): Tags {
  if (typeof window === "undefined") return DEFAULT_TAGS;
  const current = fromSearch(window.location.search);
  if (hasTags(current)) return complete(current);
  return complete(saved()?.tags ?? {});
}

/**
 * Add this visitor's tags to an outbound Ski4U URL. `placement` names the button
 * (e.g. "comfort_2guests") and goes into utm_content unless the visitor's own link
 * already set utm_content.
 */
export function withUtm(url: string, placement?: string): string {
  try {
    const u = new URL(url, window.location.href);
    const tags = getUtm();
    if (placement && !tags.utm_content) tags.utm_content = placement;
    for (const [k, v] of Object.entries(tags)) u.searchParams.set(k, v);
    return u.toString();
  } catch {
    return url;
  }
}

function ski4uLink(target: EventTarget | null): HTMLAnchorElement | null {
  const a = target instanceof Element ? target.closest("a[href]") : null;
  if (!(a instanceof HTMLAnchorElement)) return null;
  try {
    return SKI4U_HOST.test(new URL(a.href).hostname) ? a : null;
  } catch {
    return null;
  }
}

function report(a: HTMLAnchorElement) {
  const w = window as CookiebotWindow;
  const d = a.dataset;
  const tags = getUtm();
  const price = d.price ? Number(d.price) : undefined;
  const guests = d.guests ? Number(d.guests) : undefined;
  (w.dataLayer = w.dataLayer || []).push({
    event: "ski4u_click",
    link_url: a.href,
    placement: d.placement || "ski4u_link",
    room: d.room,
    guests,
    offer_code: d.offer,
    price_per_person: price,
    value: price && guests ? price * guests : price,
    currency: price ? "EUR" : undefined,
    ...tags,
  });
  if (d.offer && typeof w.fbq === "function") {
    w.fbq("track", "InitiateCheckout", {
      content_name: d.room,
      content_ids: [d.offer],
      content_type: "product",
      num_items: guests,
      value: price && guests ? price * guests : price,
      currency: "EUR",
    });
  }
}

/**
 * Tag every Ski4U link at the moment it is used (click, middle-click, keyboard, or
 * right-click "copy link"), and report the click. Covers links anywhere on the site.
 */
export function installSki4uTracking() {
  if (typeof document === "undefined") return;
  const tag = (e: Event) => {
    const a = ski4uLink(e.target);
    if (a) a.href = withUtm(a.href, a.dataset.placement);
  };
  for (const type of ["pointerdown", "contextmenu", "focusin"]) {
    document.addEventListener(type, tag, true);
  }
  const onClick = (e: MouseEvent) => {
    if (e.type === "auxclick" && e.button !== 1) return;
    const a = ski4uLink(e.target);
    if (!a) return;
    a.href = withUtm(a.href, a.dataset.placement);
    report(a);
  };
  document.addEventListener("click", onClick, true);
  document.addEventListener("auxclick", onClick, true);
}

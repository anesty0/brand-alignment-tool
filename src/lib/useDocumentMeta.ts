import { useEffect } from "react";

type Meta = {
  title: string;
  description: string;
  /** Absolute canonical URL for this route. */
  canonical?: string;
};

const SITE_ORIGIN = "https://nativecode.club";

function setMetaContent(selector: string, content: string): () => void {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) return () => {};
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => {
    if (previous === null) el.removeAttribute("content");
    else el.setAttribute("content", previous);
  };
}

/**
 * Applies route-specific document metadata, restoring the previous values on unmount.
 *
 * The restore step matters: the tags in index.html describe the homepage, and this is a
 * single-page app, so without it a visit to /visit/ski would leave its title and
 * Open Graph values in place after navigating back to `/`.
 *
 * Limitation: these tags are written by client-side JavaScript. Crawlers that execute JS
 * (Googlebot) will see them, but social-media scrapers — Facebook, Telegram, WhatsApp,
 * X, LinkedIn — read the raw HTML response and will therefore show the static homepage
 * card from index.html for every route. Per-route social previews would require
 * prerendering or server-side rendering, which is out of scope here.
 */
export function useDocumentMeta({ title, description, canonical }: Meta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const restores = [
      setMetaContent('meta[name="description"]', description),
      setMetaContent('meta[property="og:title"]', title),
      setMetaContent('meta[property="og:description"]', description),
      setMetaContent('meta[name="twitter:title"]', title),
      setMetaContent('meta[name="twitter:description"]', description),
    ];

    const canonicalHref = canonical ? `${SITE_ORIGIN}${canonical}` : null;
    let restoreCanonical = () => {};
    if (canonicalHref) {
      restores.push(setMetaContent('meta[property="og:url"]', canonicalHref));

      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) {
        const previousHref = link.getAttribute("href");
        link.setAttribute("href", canonicalHref);
        restoreCanonical = () => {
          if (previousHref === null) link!.removeAttribute("href");
          else link!.setAttribute("href", previousHref);
        };
      } else {
        // index.html ships no canonical tag, so create one for this route and remove it
        // again on unmount rather than leaving a stale canonical on the homepage.
        link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonicalHref;
        document.head.appendChild(link);
        const created = link;
        restoreCanonical = () => created.remove();
      }
    }

    return () => {
      document.title = previousTitle;
      restores.forEach((restore) => restore());
      restoreCanonical();
    };
  }, [title, description, canonical]);
}

import { createContext, useContext } from "react";

/**
 * Route-scoped contact details.
 *
 * Shared sections (Footer, CtaBanners, Hotels) are rendered by several routes with
 * different contact owners, so the links are read from context instead of being
 * hardcoded. The default below reproduces the values that were previously inline,
 * which keeps `/`, `/about` and `/secret-solden` behaving exactly as before — those
 * routes render no provider and therefore receive `DEFAULT_CONTACTS`.
 *
 * This file intentionally exports no component, so `ContactsContext.Provider` is used
 * directly at the route level.
 */
export type SiteContacts = {
  /** Booking/consultant WhatsApp — Footer contact list and the Hotels consultant CTAs. */
  whatsappUrl: string;
  /** WhatsApp behind the social icon row in CtaBanners. */
  whatsappSocialUrl: string;
  telegramUrl: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
};

const INSTAGRAM_URL =
  "https://www.instagram.com/nativecode.club?igsh=MW80enplMTRveGhjcQ%3D%3D&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/1UJJmmzpXE/?mibextid=wwXIfr";

/**
 * Values as they were hardcoded before this context existed.
 *
 * Note that `whatsappUrl` and `whatsappSocialUrl` are two different numbers. That
 * discrepancy predates this change and is preserved deliberately so the existing
 * routes are untouched; it is flagged for the client rather than silently unified.
 */
export const DEFAULT_CONTACTS: SiteContacts = {
  whatsappUrl: "https://wa.me/306972801776",
  whatsappSocialUrl: "https://wa.me/436769243174",
  telegramUrl: "https://t.me/Irina_krasil",
  email: "info@nativecode.club",
  instagramUrl: INSTAGRAM_URL,
  facebookUrl: FACEBOOK_URL,
};

/** Contacts for the /visit/people and /visit/ski landing pages. */
export const VISIT_CONTACTS: SiteContacts = {
  ...DEFAULT_CONTACTS,
  whatsappUrl: "https://wa.me/421915442716",
  whatsappSocialUrl: "https://wa.me/421915442716",
  telegramUrl: "https://t.me/jenia_nativecode",
};

export const ContactsContext = createContext<SiteContacts>(DEFAULT_CONTACTS);

export function useContacts() {
  return useContext(ContactsContext);
}

import { createContext, useContext } from "react";

/**
 * Route-scoped contact details.
 *
 * Shared sections (Footer, CtaBanners, Hotels) are rendered by several routes with
 * different contact owners, so the links are read from context instead of being
 * hardcoded. `/`, `/about` and `/grand-hotel-zell-am-see` render no provider and
 * therefore receive `DEFAULT_CONTACTS`.
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

/** Single booking WhatsApp number used across the whole site (+421 915 442 716). */
export const WHATSAPP_URL = "https://wa.me/421915442716";

/** Site-wide contacts. Both WhatsApp entries point to the same booking number. */
export const DEFAULT_CONTACTS: SiteContacts = {
  whatsappUrl: WHATSAPP_URL,
  whatsappSocialUrl: WHATSAPP_URL,
  telegramUrl: "https://t.me/jenia_nativecode",
  email: "info@nativecode.club",
  instagramUrl: INSTAGRAM_URL,
  facebookUrl: FACEBOOK_URL,
};

/** Contacts for the /visit/people and /visit/ski landing pages. */
export const VISIT_CONTACTS: SiteContacts = DEFAULT_CONTACTS;

export const ContactsContext = createContext<SiteContacts>(DEFAULT_CONTACTS);

export function useContacts() {
  return useContext(ContactsContext);
}

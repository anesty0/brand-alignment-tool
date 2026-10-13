/**
 * Online booking is paused.
 *
 * Every path that lets a guest book and pay online is hidden while this is `false`:
 * the Ski4You links in the hotel modals, the "choose a suite and book online" link
 * into /secret-solden, and the per-suite booking column on that page.
 *
 * Nothing is deleted — the markup and all URLs stay in place and are restored by
 * flipping this to `true`. The WhatsApp consultant buttons are deliberately not
 * governed by this flag, so guests can still get in touch while booking is off.
 */
export const ONLINE_BOOKING_ENABLED = false;

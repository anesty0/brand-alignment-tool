/**
 * Online booking is paused.
 *
 * While this is `false` the per-room price buttons on /grand-hotel-zell-am-see render
 * as inert labels instead of links. Add each button's `bookUrl` and flip this to
 * `true` once online booking for the Grand Hotel is ready.
 *
 * The WhatsApp consultant buttons are deliberately not
 * governed by this flag, so guests can still get in touch while booking is off.
 */
export const ONLINE_BOOKING_ENABLED = false;

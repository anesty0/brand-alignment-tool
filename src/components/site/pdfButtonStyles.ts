/**
 * Shared visual style for the navy PDF link buttons ("Программа и спикеры",
 * "Подробное расписание"). Single source of truth — every visual property lives
 * here so the buttons cannot drift apart. Both are text-only and take this
 * class verbatim; width comes from their content.
 *
 * min-h holds a 46px tap target below `md`, where the 12px text alone would
 * only make the button 44px. From `md` up the larger text reaches 48px anyway.
 */
export const pdfButtonClass =
  "inline-flex items-center justify-center min-h-[46px] rounded-md bg-navy text-white px-6 py-3.5 text-xs md:text-sm font-semibold tracking-[0.12em] uppercase hover:brightness-125 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2";

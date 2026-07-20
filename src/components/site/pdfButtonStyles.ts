/**
 * Shared visual style for the navy PDF link buttons ("Программа и спикеры",
 * "Подробное расписание"). Single source of truth — every visual property lives
 * here so the buttons cannot drift apart. Callers add only layout-level
 * utilities (width, icon gap) on top.
 */
/*
 * min-h keeps the height consistent below `md`: the icon-bearing variant is
 * sized by its 18px icons there, while a text-only button would otherwise be
 * 44px. From `md` up the larger text drives both to 48px on its own.
 */
export const pdfButtonClass =
  "inline-flex items-center justify-center min-h-[46px] rounded-md bg-navy text-white px-6 py-3.5 text-xs md:text-sm font-semibold tracking-[0.12em] uppercase hover:brightness-125 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2";

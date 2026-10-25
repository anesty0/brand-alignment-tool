import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Old Sölden hotel page. The event moved to Zell am See – Kaprun, so any old link
 * is sent to the new Grand Hotel page (vercel.json does the same at the edge).
 */
export const Route = createFileRoute("/secret-solden")({
  beforeLoad: () => {
    throw redirect({ to: "/grand-hotel-zell-am-see", replace: true });
  },
});

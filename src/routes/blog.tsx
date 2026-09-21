import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  staticData: { sitemap: false },
  component: BlogRouteLayout,
});

function BlogRouteLayout() {
  return <Outlet />;
}

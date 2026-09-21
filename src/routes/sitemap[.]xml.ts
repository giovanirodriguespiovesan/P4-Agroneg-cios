import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { blogPosts } from "@/lib/blog";
import {
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";

const BASE_URL = "https://p4agronegocios.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        const routeId = "/blog/$slug";
        for (const post of blogPosts) {
          const location = router.buildLocation({
            to: "/blog/$slug",
            params: { slug: post.slug },
            search: () => ({}),
            hash: "",
          });
          const path = sitemapPathForLocation(router, location, routeId);
          if (path) entries.push({ path, lastmod: post.publishedAt });
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

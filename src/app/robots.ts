import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://shahil-ahamed-portfolio-git-main-shahs-projects-cdf39e3c.vercel.app/sitemap.xml",
  };
}
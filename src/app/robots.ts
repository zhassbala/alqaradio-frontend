import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  let publicUrl = process.env.PUBLIC_URL ?? "https://alqaradio.kz";
  if (publicUrl?.endsWith("/")) publicUrl = publicUrl.slice(0, publicUrl.length - 1);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: publicUrl + "/sitemap.xml",
  };
}

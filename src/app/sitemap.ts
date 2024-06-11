import { MetadataRoute } from "next";
import { locales } from "@/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  let publicUrl = process.env.PUBLIC_URL ?? "https://alqaradio.kz";
  if (publicUrl?.endsWith("/")) publicUrl = publicUrl.slice(0, publicUrl.length - 1);

  const generateLocaleRoutes = (route: string, priority: number): MetadataRoute.Sitemap => {
    return locales.map((locale) => ({
      url: publicUrl + `/${locale}/${route}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority,
    }));
  };
  return [
    {
      url: publicUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...generateLocaleRoutes("", 1),
    ...generateLocaleRoutes("about", 0.5),
    ...generateLocaleRoutes("articles", 0.8),
    ...generateLocaleRoutes("products", 0.8),
    ...generateLocaleRoutes("programs", 0.8),
    ...generateLocaleRoutes("team", 0.5),
  ];
}

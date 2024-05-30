import type { IResponse, IArticle } from "@/types";
import { api } from "./api";
import { defaultLocale } from "@/locales";

export const getArticles = async (
  locale = defaultLocale,
  options: {
    limit?: number;
  } = {}
): Promise<IResponse<IArticle[]>> => {
  const { data } = await api.get("/articles", {
    params: {
      locale,
      populate: "*",
      sort: "Date",
      "pagination[start]": 0,
      "pagination[limit]": options.limit,
    },
  });
  return data;
};
export const getArticle = async (articleSlug: string): Promise<IResponse<IArticle[]>> => {
  const { data } = await api.get("/articles/", {
    params: {
      populate: "*",
      "filters[slug][$eq]": articleSlug,
    },
  });
  return data;
};

import type { IResponse, IArticle } from "@/types";
import { api } from "./api";

export const getArticles = async (
  options: {
    limit?: number;
  } = {}
): Promise<IResponse<IArticle[]>> => {
  const { data } = await api.get("/articles", {
    params: {
      populate: "*",
      sort: "Date",
    },
  });
  return data;
};
export const getArticle = async (
  articleSlug: string
): Promise<IResponse<IArticle[]>> => {
  const { data } = await api.get("/articles/", {
    params: {
      populate: "*",
      "filters[slug][$eq]": articleSlug,
    },
  });
  return data;
};

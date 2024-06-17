import { api } from "./api";
import { defaultLocale } from "@/locales";

import type { ITeamMember, IResponse } from "@/types";

export const getTeam = async (
  locale = defaultLocale,
  options: {
    limit?: number;
  } = {}
): Promise<IResponse<ITeamMember[]>> => {
  const { data } = await api.get("/team-members", {
    params: {
      locale,
      populate: "*",
      "pagination[start]": 0,
      "pagination[limit]": options.limit,
    },
  });
  return data;
};

export const getTeamMember = async (
  slug: string,
  locale = defaultLocale
): Promise<IResponse<ITeamMember[]>> => {
  const { data } = await api.get("/team-members", {
    params: {
      locale,
      populate: "*",
      "filters[slug][$eq]": slug,
    },
  });
  return data;
};

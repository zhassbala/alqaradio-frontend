import { IAboutUsPage, IMediaAboutUs } from "@/types";
import { api } from "./api";
import { defaultLocale } from "@/locales";

export const getAboutUsPage = async (locale = defaultLocale): Promise<{ data: IAboutUsPage }> => {
  const { data } = await api.get("/about-us", {
    params: {
      locale,
    },
  });
  return data;
};

export const getAboutUsMediaPage = async (
  locale = defaultLocale
): Promise<{ data: IMediaAboutUs[] }> => {
  const { data } = await api.get("/media-about-uses", {
    params: {
      locale,
      populate: "*",
    },
  });
  return data;
};

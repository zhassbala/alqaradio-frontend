import { IAboutUsPage } from "@/types";
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

export const getAboutUsMediaPage = async (locale = defaultLocale): Promise<{ data: any }> => {
  const { data } = await api.get("/media-about-uses", {
    params: {
      locale,
      populate: "*",
    },
  });
  console.log(data);
  return data;
};

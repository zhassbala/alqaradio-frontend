import { IResponse, IAudioBook } from "@/types";
import { api } from "./api";
import { defaultLocale } from "@/locales";

export const getAudioBook = async (
  slug: string,
  locale = defaultLocale
): Promise<IResponse<IAudioBook[]>> => {
  try {
    const { data } = await api.get("/audiobooks", {
      params: {
        locale,
        populate: "*",
        "filters[slug][$eq]": slug,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAudioBooks = async (locale = defaultLocale): Promise<IResponse<IAudioBook[]>> => {
  const { data } = await api.get("/audiobooks", {
    params: {
      locale,
      populate: "*",
    },
  });
  return data;
};

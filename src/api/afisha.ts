import { IAfisha, IResponse } from "@/types";
import { api } from "./api";
import { defaultLocale } from "@/locales";

export const getAfisha = async (locale = defaultLocale): Promise<IResponse<IAfisha[]>> => {
  const { data } = await api.get("/afishas", {
    params: {
      locale,
      populate: "*",
    },
  });
  return data;
};

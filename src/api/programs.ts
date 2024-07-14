import { IProgram, IResponse } from "@/types";
import { api } from "./api";
import { defaultLocale } from "@/locales";

export const getProgram = async (
  programId: number | string,
  locale = defaultLocale
): Promise<IResponse<IProgram>> => {
  try {
    const { data } = await api.get("/programs/" + programId, {
      params: {
        locale,
        populate: "deep",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPrograms = async (locale = defaultLocale): Promise<IResponse<IProgram[]>> => {
  const { data } = await api.get("/programs", {
    params: {
      locale,
      populate: "deep",
      sort: "Date:asc",
    },
  });
  return data;
};

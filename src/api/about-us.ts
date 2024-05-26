import { IAboutUsPage } from "@/types";
import { api } from "./api";

export const getAboutUsPage = async (): Promise<{ data: IAboutUsPage }> => {
  const { data } = await api.get("/about-us");
  return data;
};
export const getAboutUsMediaPage = async (): Promise<{
  data: IAboutUsPage;
}> => {
  const { data } = await api.get("/about-us-media");
  return data;
};

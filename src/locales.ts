import type { Locale } from "./types";

export const locales: Locale[] = ["kk", "en"];
export const localeNames: { [key in Locale]: string } = {
  kk: "kz",
  en: "en",
};
export const defaultLocale = locales[0];

import { Locale } from "@/types";
import translations from "./translations.json";

export const translate = (
  payload: keyof typeof translations,
  locale?: Locale
) => {
  return translations[payload]?.[locale ?? "kk"] ?? payload;
};

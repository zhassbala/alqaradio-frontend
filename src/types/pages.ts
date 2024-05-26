import { Locale } from "@/types";

export interface Params {
  lang: Locale;
}

export interface Page<T = Record<string, never>> {
  params: Params & T;
}

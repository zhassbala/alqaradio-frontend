import Link from "next/link";

import { Locale } from "@/types";
import { translate } from "@/helpers/translate";

interface Props {
  locale: Locale;
  className?: string;
}

export default function Navbar({ locale, className = "" }: Props) {
  return (
    <ul className={`grow flex gap-4 items-center justify-start ${className}`}>
      <li>
        <Link href={`/${locale}/`}>{translate("mainpage", locale)}</Link>
      </li>
      <li>
        <Link href={`/${locale}/about`}>{translate("about", locale)}</Link>
      </li>
      <li>
        <Link href={`/${locale}/about/media`}>{translate("media_about_us", locale)}</Link>
      </li>
      <li>
        <Link href={`/${locale}/products`}>{translate("products", locale)}</Link>
      </li>
      <li>
        <Link href={`/${locale}/articles`}>{translate("news", locale)}</Link>
      </li>
    </ul>
  );
}

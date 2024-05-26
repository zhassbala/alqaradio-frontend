import Link from "next/link";
import { locales, localeNames } from "@/locales";

export default function LangSelector() {
  return (
    <div className="flex gap-8 uppercase">
      {locales.map((locale) => (
        <Link key={locale} href={`/${locale}`}>
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}

import Link from "next/link";
import { locales, localeNames } from "@/locales";

export default function LangSelector({ className = "" }) {
  return (
    <div className={`flex gap-8 uppercase ${className}`}>
      {locales.map((locale) => (
        <Link key={locale} href={`/${locale}`}>
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}

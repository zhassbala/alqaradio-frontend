"use client";

import Link from "next/link";
import { locales, localeNames } from "@/locales";
import { usePathname } from "next/navigation";

export default function LangSelector({ className = "" }) {
  const pathname = usePathname();
  return (
    <div className={`flex uppercase border border-white  rounded-2xl ${className}`}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`px-4 py-1 ${
            pathname.startsWith("/" + locale) ? "bg-white text-yellow-main rounded-2xl -m-[1px]" : ""
          }`}
        >
          {localeNames[locale]}
        </Link>
      ))}
    </div>
  );
}

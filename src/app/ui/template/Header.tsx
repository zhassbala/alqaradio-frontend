import LangSelector from "@/app/ui/atoms/LangSelector";
import LogoLink from "@/app/ui/atoms/LogoLink";
import Navbar from "@/app/ui/template/Navbar";
import Socials from "@/app/ui/template/Socials";

import type { Locale } from "@/types";

export default function Header({ locale }: { locale: Locale }) {
  return (
    <header className="bg-yellow-main text-white px-2 md:px-8">
      <div className="flex items-center justify-between py-2 md:py-4 max-w-[1600px] mx-auto gap-12">
        <LogoLink locale={locale} className="mr-auto md:mr-0" />
        <Navbar locale={locale} className="hidden md:flex" />
        <Socials className="hidden md:flex" />
        <LangSelector className="mr-4 md:mr-0" />
      </div>
    </header>
  );
}

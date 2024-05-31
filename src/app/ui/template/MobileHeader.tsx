"use client";

import LogoLink from "@/app/ui/atoms/LogoLink";
import Navbar from "@/app/ui/template/Navbar";
import Socials from "@/app/ui/template/Socials";

import BurgerMenu from "@/app/ui/atoms/icons/BurgerMenu";
import Overlay from "@/app/ui/atoms/Overlay";

import type { Locale } from "@/types";
import { useState } from "react";

interface Props {
  locale: Locale;
  className?: string;
  onClose?: () => void;
}

export function MobileHeaderBody({ locale, className = "", onClose = () => {} }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    if (event.target.closest("a")) onClose();
    event.stopPropagation();
  };
  return (
    <div
      className={
        "flex flex-col py-4 gap-8 h-full w-[70%] bg-white text-yellow-main overflow-hidden " + className
      }
      onClick={handleClick}
    >
      <LogoLink locale={locale} className="" />
      <Navbar locale={locale} className="flex flex-col !items-start gap-2 pl-6" />
      <Socials className="" />
    </div>
  );
}

export default function MobileHeader({ locale }: { locale: Locale }) {
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  return (
    <>
      <button onClick={() => setShowMobileHeader(!showMobileHeader)} className="md:hidden">
        <BurgerMenu className="w-[1.8rem] h-[1.8rem]" />
      </button>
      <Overlay
        className={showMobileHeader ? "visible" : "invisible"}
        onClick={() => setShowMobileHeader(false)}
      >
        <MobileHeaderBody
          locale={locale}
          className={`transition-all ${showMobileHeader ? "" : "!w-0"}`}
          onClose={() => setShowMobileHeader(false)}
        />
      </Overlay>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo.png";
import type { Locale } from "@/types";

interface Props {
  locale: Locale;
  className?: string;
}

export default function Header({ locale, className = "" }: Props) {
  return (
    <Link
      href={"/" + locale}
      className={`w-[80px] h-[80px] flex items-center justify-center ${className}`}
    >
      <Image src={logo} alt="Radio Azan" className="max-w-full max-h-full" />
    </Link>
  );
}

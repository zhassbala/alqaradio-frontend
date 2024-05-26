import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/img/logo.png";
import type { Locale } from "@/types";

export default function Header({ locale }: { locale: Locale }) {
  return (
    <Link
      href={"/" + locale}
      className="w-[80px] h-[80px] flex items-center justify-center"
    >
      <Image src={logo} alt="Radio Azan" className="max-w-full max-h-full" />
    </Link>
  );
}

import type { Page } from "@/types";

import Image from "next/image";
import Newsfeed from "../ui/organisms/Newsfeed";

import logo from "@/assets/img/logo.png";

export default function Home({ params }: Page) {
  return (
    <div className="flex gap-8 justify-center items-center">
      <Image
        src={logo}
        alt=""
        className="w-[400px] h-[400px] object-cover shrink-0"
      ></Image>
      <Newsfeed locale={params.lang} />
    </div>
  );
}

import type { Page } from "@/types";

import Image from "next/image";
import Newsfeed from "@/app/ui/organisms/Newsfeed";
import RadioPlayer from "@/app/ui/atoms/RadioPlayer";

import logo from "@/assets/img/logo.png";

export default function Home({ params }: Page) {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 justify-center items-center">
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] shrink-0 relative">
        <Image
          src={logo}
          alt=""
          className="w-full h-full object-cover shrink-0 absolute top-0 left-0"
        ></Image>
        <RadioPlayer className="absolute right-[1.7rem] bottom-[2.2rem] md:right-[2.6rem] md:bottom-[3.2rem]" />
      </div>
      <Newsfeed locale={params.lang} />
    </div>
  );
}

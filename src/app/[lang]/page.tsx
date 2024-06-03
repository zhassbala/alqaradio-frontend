import type { Page } from "@/types";

import Image from "next/image";
import Newsfeed from "@/app/ui/organisms/Newsfeed";
import RadioPlayer from "@/app/ui/atoms/RadioPlayer";

import ProductsBlock from "@/app/ui/organisms/ProductsBlock";

import logo from "@/assets/img/logo.png";
import liveImg from "@/assets/img/live.svg";
import { getPrograms } from "@/api/programs";
import { translate } from "@/helpers";

export default async function Home({ params }: Page) {
  const { data: programs } = await getPrograms();
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-8 justify-center items-center px-2 mb-8">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] shrink-0 relative">
          <Image
            src={logo}
            alt=""
            className="w-full h-full object-cover shrink-0 absolute top-0 left-0"
          ></Image>
          <Image
            src={liveImg}
            alt=""
            className="absolute right-8 top-8 md:right-12 md:top-12 h-8 w-16"
          ></Image>
          <RadioPlayer className="absolute right-[1.7rem] bottom-[2.2rem] md:right-[2.6rem] md:bottom-[3.2rem]" />
        </div>
        <Newsfeed locale={params.lang} />
      </div>
      <ProductsBlock
        items={programs}
        locale={params.lang}
        title={translate("programs", params.lang)}
        withIcon
      />
    </>
  );
}

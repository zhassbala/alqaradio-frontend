import type { Page } from "@/types";

import Image from "next/image";
import Newsfeed from "@/app/ui/organisms/Newsfeed";
import RadioPlayer from "@/app/ui/atoms/RadioPlayer";

import logo from "@/assets/img/logo.png";
import liveImg from "@/assets/img/live.svg";
import ListCard from "../ui/molecules/ListCard";
import { getAboutUsMediaPage } from "@/api/about-us";
import ListWrapper from "../ui/molecules/ListWrapper";
import { translate } from "@/helpers";

export default async function Home({ params }: Page) {
  const { data } = await getAboutUsMediaPage(params.lang).catch((err) => {
    console.log(err);
    return { data: null };
  });
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-8 justify-center items-center px-2 mb-8">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] shrink-0 relative">
          <Image
            src={logo}
            alt=""
            className="w-full h-full object-cover shrink-0 absolute top-0 left-0"
            loading="eager"
            fetchPriority="high"
          ></Image>
          <Image
            src={liveImg}
            alt=""
            className="absolute left-8 top-8 md:left-12 md:top-12 h-8 w-16"
            loading="eager"
          ></Image>
          <RadioPlayer className="absolute right-[1.7rem] bottom-[2.2rem] md:right-[2.6rem] md:bottom-[3.2rem]" />
        </div>
        <Newsfeed locale={params.lang} />
      </div>
      <ListWrapper title={translate("media_about_us", params.lang)} withIcon>
        <div className="flex flex-col gap-8">
          {data?.map((el) => (
            <ListCard
              item={el}
              href={el.attributes.url}
              target="_blank"
              key={el.id}
              className="border-b-2 border-gray-300 md:border-none pb-6 md:pb-0 last:border-none first:[&>*]:rounded-xl"
            />
          ))}
        </div>
      </ListWrapper>
    </>
  );
}

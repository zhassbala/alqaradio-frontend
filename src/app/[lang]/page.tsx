import type { Page } from "@/types";

import Image from "next/image";
import Link from "next/link";
import Newsfeed from "@/app/ui/organisms/Newsfeed";
import RadioPlayer from "@/app/ui/atoms/RadioPlayer";
import ListWrapper from "@/app/ui/molecules/ListWrapper";
import GridCard from "@/app/ui/molecules/GridCard";

import logo from "@/assets/img/logo.png";
import liveImg from "@/assets/img/live.svg";

import { getAudioBooks } from "@/api/audiobooks";
import { getPrograms } from "@/api/programs";
import { translate } from "@/helpers";

export default async function Home({ params }: Page) {
  const { data: programs } = await getPrograms(params.lang);
  const { data: audiobooks } = await getAudioBooks(params.lang);
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
      <ListWrapper title={translate("products")} withIcon>
        <div>
          <h3 className="mb-2 font-semibold text-xl">{translate("dubbed_by_radioalqa", params.lang)}</h3>
          <div className="grid grid-cols-3 gap-8">
            {audiobooks.slice(0, 3).map((el) => (
              <GridCard
                cover={el.attributes.Cover}
                title={el.attributes.Title}
                key={el.id}
                href={`/${params.lang}/audio-books/${el.attributes.slug}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 items-center gap-4 my-4">
            <div className="bg-yellow-main h-1 rounded w-full"></div>
            <Link
              href={`/${params.lang}/audio-books`}
              className="text-xl text-white inline-block bg-yellow-main rounded text-center shrink-0 py-2 px-6 hover:scale-105 transition"
            >
              {translate("more", params.lang)}
            </Link>
            <div className="bg-yellow-main h-1 rounded w-full"></div>
          </div>

          <h3 className="mb-2 font-semibold text-xl">{translate("programs", params.lang)}</h3>
          <div className="grid grid-cols-3 gap-8">
            {programs.slice(0, 3).map((el) => (
              <GridCard
                cover={el.attributes.Cover}
                title={el.attributes.Title}
                key={el.id}
                href={`/${params.lang}/programs/${el.id}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 items-center gap-4 my-4">
            <div className="bg-yellow-main h-1 rounded w-full"></div>
            <Link
              href={`/${params.lang}/programs/more`}
              className="text-xl text-white inline-block bg-yellow-main rounded text-center shrink-0 py-2 px-6 hover:scale-105 transition"
            >
              {translate("more", params.lang)}
            </Link>
            <div className="bg-yellow-main h-1 rounded w-full"></div>
          </div>
        </div>
      </ListWrapper>
    </>
  );
}

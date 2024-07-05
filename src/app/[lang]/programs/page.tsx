import { getPrograms } from "@/api/programs";
import { translate } from "@/helpers/translate";
import { Page } from "@/types";

import ListWrapper from "@/app/ui/molecules/ListWrapper";
import GridCard from "@/app/ui/molecules/GridCard";
import { getAudioBooks } from "@/api/audiobooks";
import Link from "next/link";

export default async function Products({ params }: Page) {
  const { data: programs } = await getPrograms(params.lang);
  const { data: audiobooks } = await getAudioBooks(params.lang);
  return (
    <div className="max-w-[1280px] px-4 py-8 w-full mx-auto">
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
    </div>
  );
}

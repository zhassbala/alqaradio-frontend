import { getAudioBooks } from "@/api/audiobooks";
import { translate } from "@/helpers/translate";
import { Page } from "@/types";

import ListWrapper from "@/app/ui/molecules/ListWrapper";
import ListCard from "@/app/ui/molecules/ListCard";

export default async function AudioBooks({ params }: Page) {
  const { data: audiobooks } = await getAudioBooks();
  return (
    <div className="max-w-[1280px] px-4 py-8 w-full mx-auto">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("audio-books", params.lang)}
      </h1>
      <ListWrapper>
        <div className="grid">
          {audiobooks.map((el, index) => (
            <ListCard
              item={el}
              key={el.id}
              className={index !== audiobooks.length - 1 ? "border-b-2 border-gray-300 mb-8 pb-8" : ""}
              href={`/${params.lang}/audio-books/${el.attributes.slug}`}
            />
          ))}
        </div>
      </ListWrapper>
    </div>
  );
}

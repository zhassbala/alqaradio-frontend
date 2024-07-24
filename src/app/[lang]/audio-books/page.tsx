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
        {translate("dubbed_by_radioalqa", params.lang)}
      </h1>
      <ListWrapper>
        <div className="grid">
          {audiobooks.map((el, index) => (
            <>
              <ListCard
                item={el}
                key={el.id}
                href={`/${params.lang}/audio-books/${el.attributes.slug}`}
              />
              {index !== audiobooks.length - 1 && <div className="h-[2px] bg-slate-200 my-6 rounded" />}
            </>
          ))}
        </div>
      </ListWrapper>
    </div>
  );
}

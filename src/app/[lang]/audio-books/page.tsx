import { getAudioBooks } from "@/api/audiobooks";
import { translate } from "@/helpers/translate";
import { Page } from "@/types";

import AudioBooksBlock from "@/app/ui/organisms/AudioBooksBlock";

export default async function AudioBooks({ params }: Page) {
  const { data: audiobooks } = await getAudioBooks();
  return (
    <div className="max-w-[1280px] px-4 py-8 w-full mx-auto">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("audio-books", params.lang)}
      </h1>
      <AudioBooksBlock locale={params.lang} items={audiobooks} />
    </div>
  );
}

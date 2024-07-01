import { Page } from "@/types";
import { getAudioBook } from "@/api/audiobooks";
import { capitalize, getImagePath } from "@/helpers";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import NotFound from "@/app/ui/template/NotFound";
import AudioBookPlayer from "@/app/ui/molecules/AudioBookPlayer";

export default async function ({ params }: Page<{ "audio-book-slug": string }>) {
  try {
    const {
      data: [audiobook],
    } = await getAudioBook(params["audio-book-slug"], params.lang);
    if (!audiobook) {
      return <NotFound></NotFound>;
    }
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div
          className={`grid gap-8 mb-8 ${
            audiobook.attributes.Cover?.data ? "md:grid-cols-2" : "md:w-[60%] md:mx-auto text-center"
          }`}
        >
          {audiobook.attributes.Cover?.data && (
            <Image
              src={getImagePath(audiobook.attributes.Cover.data.attributes.url)}
              width={audiobook.attributes.Cover.data.attributes.width}
              height={audiobook.attributes.Cover.data.attributes.height}
              alt={audiobook.attributes.Cover.data.attributes.alternativeText ?? ""}
            />
          )}
          <div>
            <h1 className="text-3xl font-semibold uppercase text-yellow-main mb-8">
              {audiobook.attributes.Title}
            </h1>
            {audiobook.attributes.Description && (
              <BlocksRenderer content={audiobook.attributes.Description} />
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {audiobook.attributes.Files?.data?.map((el) => (
            <AudioBookPlayer audiobook={el} />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    return <NotFound></NotFound>;
  }
}

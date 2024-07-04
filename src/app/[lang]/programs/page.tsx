import { getPrograms } from "@/api/programs";
import { translate } from "@/helpers/translate";
import { Page } from "@/types";

import ListWrapper from "@/app/ui/molecules/ListWrapper";
import GridCard from "@/app/ui/molecules/GridCard";
import { getAudioBooks } from "@/api/audiobooks";

export default async function Products({ params }: Page) {
  const { data: programs } = await getPrograms(params.lang);
  const { data: audiobooks } = await getAudioBooks(params.lang);
  return (
    <div className="max-w-[1280px] px-4 py-8 w-full mx-auto">
      <ListWrapper title={translate("products")} withIcon>
        <div>
          <h3 className="mb-2 font-semibold text-xl">{translate("dubbed_by_radioalqa")}</h3>
          <div className="grid grid-cols-3 gap-8">
            {audiobooks.map((el) => (
              <GridCard
                cover={el.attributes.Cover}
                key={el.id}
                href={`/${params.lang}/programs/${el.id}`}
              />
            ))}
          </div>

          <h3 className="mb-2 font-semibold text-xl">{translate("programs")}</h3>
          <div className="grid grid-cols-3 gap-8">
            {programs.map((el) => (
              <GridCard
                cover={el.attributes.Cover}
                key={el.id}
                href={`/${params.lang}/programs/${el.id}`}
              />
            ))}
          </div>
        </div>
      </ListWrapper>
    </div>
  );
}

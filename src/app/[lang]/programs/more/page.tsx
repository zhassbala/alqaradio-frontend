import { getPrograms } from "@/api/programs";
import { translate } from "@/helpers/translate";
import { Page } from "@/types";

import ListWrapper from "@/app/ui/molecules/ListWrapper";
import ListCard from "@/app/ui/molecules/ListCard";

export default async function Products({ params }: Page) {
  const { data: programs } = await getPrograms(params.lang);
  return (
    <div className="max-w-[1280px] px-4 py-8 w-full mx-auto">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("products", params.lang)}
      </h1>
      <ListWrapper>
        <div className="grid gap-8">
          {programs.map((el) => (
            <ListCard item={el} key={el.id} href={`/${params.lang}/programs/${el.id}`} />
          ))}
        </div>
      </ListWrapper>
    </div>
  );
}

import { getProgram } from "@/api/programs";
import { Page } from "@/types";
import { getImagePath, translate } from "@/helpers";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import NotFound from "@/app/ui/template/NotFound";
import ListWrapper from "@/app/ui/molecules/ListWrapper";
import ListCard from "@/app/ui/molecules/ListCard";

export default async function ({ params }: Page<{ "program-id": string }>) {
  try {
    const { data: program } = await getProgram(params["program-id"]);
    return (
      <ListWrapper>
        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            {program.attributes.Cover.data && (
              <Image
                src={getImagePath(program.attributes.Cover.data.attributes.url)}
                width={program.attributes.Cover.data.attributes.width}
                height={program.attributes.Cover.data.attributes.height}
                alt={program.attributes.Cover.data.attributes.alternativeText ?? ""}
              />
            )}
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold uppercase text-yellow-main mb-8">
                {program.attributes.Title}
              </h1>
              <div className="grow">
                <BlocksRenderer content={program.attributes.Description} />
              </div>
              {program.attributes.url && (
                <a href={program.attributes.url} className="text-blue-600 underline" target="_blank">
                  {translate("more")}
                  {">>"}
                </a>
              )}
            </div>
          </div>
          <div className="w-full rounded h-1 bg-yellow-main/80"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {program.attributes.sections.data?.map((el) => (
              <ListCard
                item={el}
                href={el.attributes.url}
                key={el.id}
                className="md:h-[112px] md:[&>*]:w-[200px]"
                target="_blank"
                isSection
              />
            ))}
          </div>
        </div>
      </ListWrapper>
    );
  } catch (err) {
    return <NotFound></NotFound>;
  }
}

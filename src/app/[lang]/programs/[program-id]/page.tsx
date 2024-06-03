import { getProgram } from "@/api/programs";
import { Page } from "@/types";
import { capitalize, getImagePath } from "@/helpers";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import NotFound from "@/app/ui/template/NotFound";

export default async function ({ params }: Page<{ "program-id": string }>) {
  try {
    const { data: program } = await getProgram(params["program-id"]);
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Image
            src={getImagePath(program.attributes.Cover.data.attributes.url)}
            width={program.attributes.Cover.data.attributes.width}
            height={program.attributes.Cover.data.attributes.height}
            alt={program.attributes.Cover.data.attributes.alternativeText ?? ""}
          />
          <div>
            <h1 className="text-3xl font-semibold uppercase text-yellow-main mb-8">
              {program.attributes.Title}
            </h1>
            <BlocksRenderer content={program.attributes.Description} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {program.attributes.Files.data.map((el) => (
            <div key={el.id}>
              <p>{capitalize(el.attributes.name)}</p>
              <audio controls className="w-full">
                <source src={getImagePath(el.attributes.url)} type={el.attributes.mime} />
              </audio>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    return <NotFound></NotFound>;
  }
}

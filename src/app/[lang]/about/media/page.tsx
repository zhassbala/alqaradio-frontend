import { Card } from "antd";

import { getAboutUsMediaPage } from "@/api/about-us";
import { FileObject, Page } from "@/types";
import { getImagePath, translate } from "@/helpers";
import Image from "next/image";

const Meta = Card.Meta;
export default async function AboutUsMedia({ params }: Page) {
  const { data } = await getAboutUsMediaPage(params.lang).catch((err) => {
    console.log(err);
    return { data: null };
  });
  const getMoreBtn = (url: string) => (
    <a href={url} target="_blank">
      {translate("more")}
    </a>
  );
  const getCover = (image: FileObject) => (
    <Image
      src={getImagePath(image.attributes.url)}
      alt={image.attributes.alternativeText ?? image.attributes.caption ?? image.attributes.name}
      width={image.attributes.width}
      height={image.attributes.height}
    ></Image>
  );
  console.log(Meta);
  return (
    <div className="max-w-[1280px]">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("media_about_us", params.lang)}
      </h1>
      <div className="bg-white rounded-xl px-4 py-8 md:px-8 md:py-16 shadow-xl grid grid-cols-2">
        {data.map((el: any) => (
          <Card
            title={el.attributes.title}
            extra={getMoreBtn(el.attributes.url)}
            cover={getCover(el.attributes.cover.data)}
            key={el.attributes.id}
            hoverable
          >
            {el.attributes.description ?? el.attributes.title}
          </Card>
        ))}
      </div>
    </div>
  );
}

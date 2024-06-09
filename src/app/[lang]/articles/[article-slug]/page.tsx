import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Page } from "@/types";

import { getArticle } from "@/api/articles";
import { getImagePath } from "@/helpers/getImagePath";

import NotFound from "@/app/ui/template/NotFound";
import Image from "next/image";

interface Params {
  "article-slug": string;
}

export default async function Article(page: Page<Params>) {
  const {
    data: [article],
  } = await getArticle(page.params["article-slug"]);
  if (!article) {
    return <NotFound></NotFound>;
  }
  return (
    <div className="max-w-[1280px] p-4">
      <h1 className="text-2xl md:text-3xl text-center md:text-left font-semibold mb-8">
        {article.attributes.Title}
      </h1>
      {article.attributes.Cover?.data && (
        <div className="w-full backdrop-blur-lg rounded-xl relative">
          <div
            className="w-full h-full absolute top-0 left-0 blur opacity-60"
            style={{
              backgroundImage: `url(${getImagePath(article.attributes.Cover.data.attributes.url)})`,
            }}
          />

          <Image
            className="object-cover w-full max-w-[800px] mb-4 mx-auto relative z-10"
            width={article.attributes.Cover.data.attributes.width}
            height={article.attributes.Cover.data.attributes.height}
            src={getImagePath(article.attributes.Cover.data.attributes.url)}
            alt={article.attributes.Cover.data.attributes.name}
          ></Image>
        </div>
      )}
      <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
        <BlocksRenderer content={article.attributes.Content ?? []}></BlocksRenderer>
      </div>
    </div>
  );
}

import { Page } from "@/types";
import { getArticles } from "@/api/articles";
import { getImagePath } from "@/helpers/getImagePath";
import { translate } from "@/helpers/translate";

import Link from "next/link";
import Image from "next/image";
import NewsCard from "@/app/ui/molecules/NewsCard";

export default async function Articles(page: Page) {
  const { data: articles } = await getArticles();
  return (
    <>
      <h1 className="text-2xl mb-4">{translate("news", page.params.lang)}</h1>
      <ul>
        {articles.map((el) => (
          <NewsCard {...el} locale={page.params.lang} key={el.id}></NewsCard>
        ))}
      </ul>
    </>
  );
}

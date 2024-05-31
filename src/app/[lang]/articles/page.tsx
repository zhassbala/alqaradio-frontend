import { Page } from "@/types";
import { getArticles } from "@/api/articles";
import { translate } from "@/helpers/translate";

import NewsCard from "@/app/ui/molecules/NewsCard";

export default async function Articles(page: Page) {
  const { data: articles } = await getArticles(page.params.lang);
  return (
    <div className="px-4 my-4">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("news", page.params.lang)}
      </h1>
      <ul className="flex gap-8 flex-wrap justify-center md:justify-start">
        {articles.map((el) => (
          <NewsCard {...el} locale={page.params.lang} key={el.id} cards></NewsCard>
        ))}
      </ul>
    </div>
  );
}

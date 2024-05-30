import { Page } from "@/types";
import { getArticles } from "@/api/articles";
import { translate } from "@/helpers/translate";

import NewsCard from "@/app/ui/molecules/NewsCard";

export default async function Articles(page: Page) {
  const { data: articles } = await getArticles(page.params.lang);
  return (
    <div className="px-4 mt-4">
      <h1 className="text-2xl mb-4">{translate("news", page.params.lang)}</h1>
      <ul className="grid gap-8">
        {articles.map((el) => (
          <NewsCard {...el} locale={page.params.lang} key={el.id}></NewsCard>
        ))}
      </ul>
    </div>
  );
}

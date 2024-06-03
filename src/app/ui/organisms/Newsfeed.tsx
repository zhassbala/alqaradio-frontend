import { getArticles } from "@/api/articles";
import { translate } from "@/helpers/translate";
import { Locale } from "@/types";

import NewsCard from "@/app/ui/molecules/NewsCard";

type Props = {
  locale: Locale;
};

export default async function Newsfeed({ locale }: Props) {
  const { data: articles } = await getArticles(locale, {
    limit: 2,
  });
  return (
    <div className="flex flex-col max-w-full w-[700px] [&>div]:p-4 m-4 bg-[white] rounded-xl overflow-hidden">
      <div className="text-[white] bg-yellow-main">
        <h2 className="uppercase text-2xl text-center">{translate("news", locale)}</h2>
      </div>
      {articles.length ? (
        articles.map((el) => <NewsCard {...el} locale={locale} key={el.id}></NewsCard>)
      ) : (
        <div className="text-xl text-gray-light text-center">{translate("no_news", locale)}</div>
      )}
    </div>
  );
}

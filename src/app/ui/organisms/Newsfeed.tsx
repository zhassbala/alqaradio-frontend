import { getArticles } from "@/api/articles";
import { translate } from "@/helpers/translate";
import { Locale } from "@/types";

import NewsCard from "@/app/ui/molecules/NewsCard";

type Props = {
  locale: Locale;
};

export default async function Newsfeed({ locale }: Props) {
  const { data: articles } = await getArticles();
  return (
    <div className="flex flex-col max-w-[700px] [&>div]:p-4 m-4 bg-[white]">
      <div className="text-[white] bg-skyblue">
        <h2 className="uppercase text-2xl text-center">
          {translate("news", locale)}
        </h2>
      </div>
      {articles.map((el) => (
        <NewsCard {...el} locale={locale} key={el.id}></NewsCard>
      ))}
    </div>
  );
}

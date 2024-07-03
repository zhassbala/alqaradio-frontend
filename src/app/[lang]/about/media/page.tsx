import { getAboutUsMediaPage } from "@/api/about-us";
import { Page } from "@/types";
import { translate } from "@/helpers";

import ListCard from "@/app/ui/molecules/ListCard";

export default async function AboutUsMedia({ params }: Page) {
  const { data } = await getAboutUsMediaPage(params.lang).catch((err) => {
    console.log(err);
    return { data: null };
  });
  return (
    <div className="max-w-[1280px] pt-8 md:pt-0">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("media_about_us", params.lang)}
      </h1>
      <div className="bg-white rounded-xl px-4 py-8 md:px-8 md:py-16 shadow-xl flex flex-col gap-8">
        {data?.map((el) => (
          <ListCard
            item={el}
            href={el.attributes.url}
            target="_blank"
            key={el.id}
            className="border-b-2 border-gray-300 md:border-none pb-6 md:pb-0 last:border-none"
          />
        ))}
      </div>
    </div>
  );
}

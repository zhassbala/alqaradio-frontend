import { getPrograms } from "@/api/programs";
import { translate } from "@/helpers/translate";
import { Page } from "@/types";

import ProductsBlock from "@/app/ui/organisms/ProductsBlock";

export default async function Products({ params }: Page) {
  const { data: programs } = await getPrograms();
  return (
    <div className="max-w-[1280px] px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {translate("products", params.lang)}
      </h1>
      <ProductsBlock locale={params.lang} items={programs} />
    </div>
  );
}

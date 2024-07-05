import { getAfisha } from "@/api/afisha";
import AfishaCard from "@/app/ui/molecules/AfishaCard";
import ListWrapper from "@/app/ui/molecules/ListWrapper";
import { translate } from "@/helpers";
import { Page } from "@/types";

export default async function ({ params }: Page) {
  const { data: afisha } = await getAfisha(params.lang);
  return (
    <ListWrapper title={translate("afisha", params.lang)} withIcon>
      <div className="flex flex-wrap gap-8 justify-center">
        {afisha.map((el) => (
          <AfishaCard cover={el.attributes.Cover} title={el.attributes.Title} key={el.id} />
        ))}
      </div>
    </ListWrapper>
  );
}

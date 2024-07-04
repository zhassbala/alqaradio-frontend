import { IAudioBook, Locale } from "@/types";

import ListCard from "@/app/ui/molecules/ListCard";
import ListWrapper from "@/app/ui/molecules/ListWrapper";

interface Props {
  locale: Locale;
  items: IAudioBook[];
}

export default function ({ locale, items }: Props) {
  return (
    <ListWrapper>
      <div className="grid">
        {items.map((el, index) => (
          <ListCard
            item={el}
            key={el.id}
            className={index !== items.length - 1 ? "border-b-2 border-gray-300 mb-8 pb-8" : ""}
            href={`/${locale}/audio-books/${el.attributes.slug}`}
          />
        ))}
      </div>
    </ListWrapper>
  );
}

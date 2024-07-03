import { IAudioBook, Locale } from "@/types";

import ListCard from "@/app/ui/molecules/ListCard";
import Image from "next/image";

interface Props {
  locale: Locale;
  items: IAudioBook[];
  className?: string;
  title?: string;
  withIcon?: boolean;
}

export default function ({ locale, className = "", items, title, withIcon }: Props) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      {title && (
        <div className="mb-6">
          <h1 className="text-yellow-main font-semibold uppercase text-center text-2xl ">{title}</h1>

          {withIcon && (
            <Image src="/static/icon.svg" alt="" width="56" height="56" className="mx-auto"></Image>
          )}
        </div>
      )}
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
    </div>
  );
}

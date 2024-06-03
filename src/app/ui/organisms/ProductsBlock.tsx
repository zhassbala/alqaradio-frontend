import { IProgram, Locale } from "@/types";

import ProductCard from "@/app/ui/molecules/ProductCard";
import Image from "next/image";

interface Props {
  locale: Locale;
  items: IProgram[];
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
          <ProductCard
            item={el}
            locale={locale}
            key={el.id}
            className={index !== items.length - 1 ? "border-b-2 border-gray-300 mb-8 pb-8" : ""}
          />
        ))}
      </div>
    </div>
  );
}

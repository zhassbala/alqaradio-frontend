import { getImagePath } from "@/helpers";
import { IProgram, Locale } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface Props {
  item: IProgram;
  locale: Locale;
  className?: string;
}

export default function ({ item, locale = "kk", className = "" }: Props) {
  return (
    <div className={`grid md:flex gap-4 ${className}`}>
      <Image
        src={getImagePath(item.attributes.Cover.data.attributes.url)}
        width={item.attributes.Cover.data.attributes.width}
        height={item.attributes.Cover.data.attributes.height}
        alt=""
        className="md:w-[250px] md:h-[170px] base-[220px] object-cover"
      />
      <div className="grid text-sm">
        <span>
          <Link
            href={`/${locale}/programs/${item.id}`}
            className="font-semibold text-xl hover:underline text-black mb-4 md:mb-2 inline-block"
          >
            {item.attributes.Title}
          </Link>
        </span>
        <BlocksRenderer content={item.attributes.Description} />
      </div>
    </div>
  );
}
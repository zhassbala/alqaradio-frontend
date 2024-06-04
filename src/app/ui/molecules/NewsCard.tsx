import { capitalize, formatDate, shorten } from "@/helpers";
import { getImagePath } from "@/helpers/getImagePath";
import { IArticle, Locale } from "@/types";

import Image from "next/image";
import Link from "next/link";

export default async function NewsCard(props: IArticle & { locale: Locale; cards?: boolean }) {
  return (
    <div
      className={`grid gap-4 ${
        props.cards ? "max-w-[380px] max-h-[435px] bg-white grid-rows-5" : "md:grid-cols-2 md:gap-4"
      }`}
    >
      <Link
        href={`/${props.locale}/articles/${props.attributes.slug}`}
        className={props.cards ? "row-span-3" : "h-[160px]"}
      >
        {props.attributes.Cover?.data ? (
          <Image
            className="object-cover w-full h-full"
            width={props.attributes.Cover.data.attributes.width}
            height={props.attributes.Cover.data.attributes.height}
            src={getImagePath(props.attributes.Cover.data.attributes.url)}
            alt={props.attributes.Cover.data.attributes.name}
          ></Image>
        ) : (
          <div className="bg-[grey]"></div>
        )}
      </Link>
      <div className={props.cards ? "row-span-2 p-4 md:px-6" : "pl-2 md:pl-0"}>
        <Link
          href={`/${props.locale}/articles/${props.attributes.slug}`}
          className="text-lg font-medium leading-6 mb-2 hover:underline block"
        >
          {capitalize(shorten(props.attributes.Title))}
        </Link>
        <p className="text-[grey] text-sm">{formatDate(props.attributes.Date)}</p>
      </div>
    </div>
  );
}

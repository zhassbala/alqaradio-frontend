import { formatDate } from "@/helpers/date";
import { getImagePath } from "@/helpers/getImagePath";
import { IArticle, Locale } from "@/types";

import Image from "next/image";
import Link from "next/link";

export default async function NewsCard(props: IArticle & { locale: Locale }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      <Link href={`/${props.locale}/articles/${props.attributes.slug}`}>
        {props.attributes.Cover?.data ? (
          <Image
            className="object-cover"
            width={props.attributes.Cover.data.attributes.width}
            height={props.attributes.Cover.data.attributes.height}
            src={getImagePath(props.attributes.Cover.data.attributes.url)}
            alt={props.attributes.Cover.data.attributes.name}
          ></Image>
        ) : (
          <div className="bg-[grey]"></div>
        )}
      </Link>
      <div className="pl-2 md:pl-0">
        <Link
          href={`/${props.locale}/articles/${props.attributes.slug}`}
          className="text-lg font-medium leading-6 mb-2 hover:underline block"
        >
          {props.attributes.Title}
        </Link>
        <p className="text-[grey] text-sm">
          {formatDate(props.attributes.publishedAt)}
        </p>
      </div>
    </div>
  );
}

import { getImagePath, translate } from "@/helpers";
import { FileObject } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

interface Props {
  item: {
    attributes: {
      Cover: {
        data?: FileObject;
      };
      Title: string;
      Description?: BlocksContent | string;
    };
  };
  href: string;
  target?: string;
  className?: string;
}

export default function ({ item, className = "", href, target = "_self" }: Props) {
  return (
    <div className={`grid md:flex gap-4 ${className}`}>
      {item.attributes.Cover?.data ? (
        <Image
          src={getImagePath(item.attributes.Cover.data.attributes.url)}
          width={item.attributes.Cover.data.attributes.width}
          height={item.attributes.Cover.data.attributes.height}
          alt=""
          className="md:w-[250px] md:h-[170px] base-[220px] object-cover"
        />
      ) : (
        <div className="md:w-[250px] h-[170px] base-[220px] bg-gray-200"></div>
      )}
      <div className="grid text-sm">
        <span>
          <Link
            href={href}
            target={target}
            className="font-semibold text-xl hover:underline text-black mb-4 md:mb-2 inline-block"
          >
            {item.attributes.Title}
          </Link>
        </span>
        {target === "_blank" ? (
          <div>
            <a href={href} target="_blank" className="text-blue-600 underline">
              {translate("more")} {">>"}
            </a>
          </div>
        ) : (
          item.attributes.Description &&
          (typeof item.attributes.Description === "string" ? (
            <p>{item.attributes.Description}</p>
          ) : (
            <BlocksRenderer content={item.attributes.Description} />
          ))
        )}
      </div>
    </div>
  );
}

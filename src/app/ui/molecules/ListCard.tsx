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
  isSection?: boolean;
}

export default function ({ item, className = "", href, target = "_self", isSection }: Props) {
  return (
    <Link
      href={href}
      target={target}
      className={`grid md:flex gap-4 hover:bg-gray-100 md:h-[170px] rounded transition-all decoration-transparent hover:decoration-black shadow-md md:shadow-none overflow-hidden ${className}`}
    >
      {item.attributes.Cover?.data ? (
        <Image
          src={getImagePath(item.attributes.Cover.data.attributes.url)}
          width={item.attributes.Cover.data.attributes.width}
          height={item.attributes.Cover.data.attributes.height}
          alt=""
          className="md:w-[250px] h-[170px] md:h-full base-[220px] object-cover md:rounded"
        />
      ) : (
        <div className="md:w-[250px] h-[170px] md:h-full base-[220px] bg-gray-200 md:rounded"></div>
      )}
      <div className="grid text-sm p-6 md:p-2 decoration-inherit grow">
        <span className="font-semibold text-xl text-black mb-4 md:mb-2 inline-block decoration-inherit underline">
          {item.attributes.Title}
        </span>
        {target === "_blank" && !isSection ? (
          <div>
            <span className="text-blue-600 underline">
              {translate("more")} {">>"}
            </span>
          </div>
        ) : (
          item.attributes.Description &&
          (typeof item.attributes.Description === "string" ? (
            <p className="overflow-hidden">{item.attributes.Description}</p>
          ) : (
            <BlocksRenderer content={item.attributes.Description} />
          ))
        )}
      </div>
    </Link>
  );
}

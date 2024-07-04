import { getImagePath, translate } from "@/helpers";
import { FileObject } from "@/types";

import Image from "next/image";
import Link from "next/link";

interface Props {
  cover: {
    data?: FileObject;
  };
  href: string;
  className?: string;
}

export default function ({ className = "", href, cover }: Props) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {cover?.data ? (
        <Image
          src={getImagePath(cover.data.attributes.url)}
          width={cover.data.attributes.width}
          height={cover.data.attributes.height}
          alt=""
          className="h-[250px] shrink-0 object-cover"
        />
      ) : (
        <div className="h-[250px] shrink-0 bg-gray-200"></div>
      )}
      <div className="h-10 hover:[&>a]:h-full hover:[&>a]:py-1 flex flex-col justify-center">
        <Link
          href={href}
          className="text-xl text-white mb-4 md:mb-2 inline-block w-full bg-yellow-main rounded h-1 transition-all text-center"
        >
          {translate("more")}
        </Link>
      </div>
    </div>
  );
}

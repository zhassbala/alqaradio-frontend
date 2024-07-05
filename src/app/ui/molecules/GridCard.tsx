import { getImagePath } from "@/helpers";
import { FileObject } from "@/types";

import Image from "next/image";
import Link from "next/link";

interface Props {
  cover: {
    data?: FileObject;
  };
  title: string;
  href: string;
  className?: string;
}

export default function ({ className = "", href, cover, title }: Props) {
  return (
    <div className="text-center bg-gray-100 hover:bg-yellow-main/80 hover:text-white transition pb-4 rounded overflow-hidden">
      <Link href={href} className={`flex flex-col mb-2 overflow-hidden h-[200px] ${className}`}>
        {cover?.data ? (
          <Image
            src={getImagePath(cover.data.attributes.url)}
            width={cover.data.attributes.width}
            height={cover.data.attributes.height}
            alt=""
            className="h-full shrink-0 object-cover hover:scale-110 transition"
          />
        ) : (
          <div className="h-full shrink-0 bg-gray-200"></div>
        )}
      </Link>
      <Link href={href} className="text-xl semibold hover:underline transition-all">
        {title}
      </Link>
    </div>
  );
}

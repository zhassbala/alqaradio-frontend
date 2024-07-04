import { getImagePath } from "@/helpers";
import { FileObject } from "@/types";

import Image from "next/image";

interface Props {
  cover: {
    data?: FileObject;
  };
  title: string;
  className?: string;
}

export default function ({ className = "", cover, title }: Props) {
  return (
    <div className={`flex flex-col gap-3 w-[300px] ${className}`}>
      {cover?.data ? (
        <Image
          src={getImagePath(cover.data.attributes.url)}
          width={cover.data.attributes.width}
          height={cover.data.attributes.height}
          alt=""
          className="h-[400px] shrink-0 object-cover"
        />
      ) : (
        <div className="h-[400px] shrink-0 bg-gray-200"></div>
      )}
      <p className="text-xl text-black mb-4 md:mb-2 inline-block text-center">{title}</p>
    </div>
  );
}

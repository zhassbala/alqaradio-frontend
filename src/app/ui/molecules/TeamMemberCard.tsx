import { getImagePath } from "@/helpers";
import { Locale, ITeamMember } from "@/types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

interface Props {
  item: ITeamMember;
  locale: Locale;
  className?: string;
}

export default function ({ item, className = "" }: Props) {
  return (
    <div className={`flex flex-col gap-4 text-center ${className} max-w-[260px]`}>
      {item.attributes.avatar ? (
        <Image
          src={getImagePath(item.attributes.avatar.data.attributes.url)}
          width="200"
          height="200"
          alt=""
          className="w-[250px] h-[250px] base-[250px] object-cover rounded-full border-4 border-yellow-main mx-auto"
        />
      ) : (
        <div className="w-[250px] h-[250px] base-[250px] rounded-full border-4 border-yellow-main mx-auto bg-gray-200 overflow-hidden pt-12">
          <FontAwesomeIcon className="w-full h-full text-gray-400" icon={faUser}></FontAwesomeIcon>
        </div>
      )}
      <div className="flex flex-col text-sm grow">
        <p className="text-lg font-medium">{item.attributes.fullname}</p>
        <p className="text-sm text-gray-400">{item.attributes.subtitle}</p>
      </div>
    </div>
  );
}

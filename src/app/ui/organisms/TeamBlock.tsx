import { Locale, TeamMember } from "@/types";

import TeamMemberCard from "../molecules/TeamMemberCard";
import Image from "next/image";

interface Props {
  locale: Locale;
  items: TeamMember[];
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
      <div className="flex flex-wrap justify-center gap-8">
        {items.map((el, index) => (
          <TeamMemberCard item={el} locale={locale} key={index} />
        ))}
      </div>
    </div>
  );
}

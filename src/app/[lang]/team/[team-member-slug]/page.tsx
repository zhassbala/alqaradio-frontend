import type { Page } from "@/types";

import { getImagePath } from "@/helpers";
import { getTeamMember } from "@/api/team";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function ({ params }: Page<{ "team-member-slug": string }>) {
  const {
    data: [teamMember],
  } = await getTeamMember(params["team-member-slug"], params.lang);
  return (
    <div className="bg-white rounded-xl shadow-lg p-16">
      <div className="flex justify-center gap-16 flex-col md:flex-row items-start">
        {teamMember.attributes.avatar.data ? (
          <Image
            src={getImagePath(teamMember.attributes.avatar.data.attributes.url)}
            width="200"
            height="200"
            alt=""
            className="w-[250px] h-[250px] base-[250px] object-cover rounded-full border-4 border-yellow-main shrink-0"
          />
        ) : (
          <div className="w-[250px] h-[250px] base-[250px] rounded-full border-4 border-yellow-main  bg-gray-200 overflow-hidden pt-12 shrink-0">
            <FontAwesomeIcon className="w-full h-full text-gray-400" icon={faUser}></FontAwesomeIcon>
          </div>
        )}
        <div>
          <h1 className="text-3xl font-semibold uppercase text-yellow-main mb-8">
            {teamMember.attributes.fullname}
          </h1>
          <BlocksRenderer content={teamMember.attributes.description ?? []} />
        </div>
      </div>
    </div>
  );
}

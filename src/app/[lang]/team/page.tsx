import type { Page } from "@/types";

import TeamBlock from "@/app/ui/organisms/TeamBlock";

import { translate } from "@/helpers";
import { getTeam } from "@/api/team";

export default async function ({ params }: Page) {
  const { data: team } = await getTeam(params.lang);
  return (
    <div>
      <TeamBlock items={team} locale={params.lang} title={translate("team", params.lang)} withIcon />
    </div>
  );
}

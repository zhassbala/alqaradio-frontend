import type { Page } from "@/types";

import TeamBlock from "@/app/ui/organisms/TeamBlock";

import { team } from "@/static/team";
import { translate } from "@/helpers";

export default function ({ params }: Page) {
  return (
    <div>
      <TeamBlock items={team} locale={params.lang} title={translate("team", params.lang)} withIcon />
    </div>
  );
}

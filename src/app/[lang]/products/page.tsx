import { translate } from "@/helpers/translate";
import { Page } from "@/types";

export default function Products(page: Page) {
  return (
    <div>
      <h1>{translate("products", page.params.lang)}</h1>
    </div>
  );
}

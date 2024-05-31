import NotFound from "@/app/ui/template/NotFound";

import { getAboutUsMediaPage } from "@/api/about-us";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function AboutUsMedia() {
  const { data: content } = await getAboutUsMediaPage();
  if (!content) {
    return <NotFound></NotFound>;
  }
  return (
    <div className="max-w-[1280px] px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">{content.attributes.Title}</h1>
      <div>
        <BlocksRenderer content={content.attributes.Content ?? []}></BlocksRenderer>
      </div>
    </div>
  );
}

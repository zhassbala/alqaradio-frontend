import NotFound from "@/app/ui/template/NotFound";

import { getAboutUsPage } from "@/api/about-us";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default async function AboutUs() {
  const { data: content } = await getAboutUsPage();
  if (!content) {
    return <NotFound></NotFound>;
  }
  return (
    <div className="max-w-[1280px]">
      <h1 className="text-3xl font-semibold mb-8">
        {content.attributes.Title}
      </h1>
      <div>
        <BlocksRenderer
          content={content.attributes.Content ?? []}
        ></BlocksRenderer>
      </div>
    </div>
  );
}

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
      <h1 className="text-3xl md:text-4xl font-medium md:font-semibold uppercase mb-8 text-center">
        {content.attributes.Title}
      </h1>
      <div className="bg-white rounded-xl px-4 py-8 md:px-8 md:py-16 shadow-xl first:[&>*]:text-center">
        <BlocksRenderer content={content.attributes.Content ?? []}></BlocksRenderer>
      </div>
    </div>
  );
}

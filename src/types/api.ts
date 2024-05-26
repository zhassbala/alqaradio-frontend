import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Locale } from "./locales";

export interface IResponse<T = Record<string, never>> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiResponse<T = Record<string, never>> {
  id: number;
  attributes: T;
}

export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type ImageObject = StrapiResponse<{
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: {
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  size: number;
  url: string;
  createdAt: string;
  updatedAt: string;

  hash: string;
  ext: string;
  mime: string;
  previewUrl?: string;
  provider: string;
  provider_metadata: null;
}>;

export type IArticle = StrapiResponse<{
  Title: string;
  Date: string;
  locale: Locale;
  Cover?: { data: ImageObject };
  Content?: BlocksContent;

  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}>;

export type IAboutUsPage = StrapiResponse<{
  Title: string;
  Content: BlocksContent;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: Locale;
}>;

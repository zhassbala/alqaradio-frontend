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
  attributes: T & {
    createdAt: string;
    updatedAt: string;
  };
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

export type FileObject = StrapiResponse<{
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
  Cover?: { data: FileObject };
  Content?: BlocksContent;

  slug: string;
  publishedAt: string;
}>;

export type IAboutUsPage = StrapiResponse<{
  Title: string;
  Content: BlocksContent;
  locale: Locale;

  publishedAt: string;
}>;

export type IProgram = StrapiResponse<{
  Title: string;
  Description: BlocksContent;
  Cover: { data: FileObject };
  Files: { data?: FileObject[] };
}>;

export type IAudioBook = StrapiResponse<{
  slug: string;

  Title: string;
  Description?: BlocksContent;
  Cover?: { data: FileObject };
  Files?: { data?: FileObject[] };

  locale: Locale;
}>;

export type ITeamMember = StrapiResponse<{
  fullname: string;
  subtitle?: string;
  avatar: { data: FileObject };
  locale: Locale;
}>;

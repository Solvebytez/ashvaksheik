// Exporting the Thumbnail media object type
export interface ThumbnailAttributes {
  url: string;
  alternativeText: string | null;
  caption: string | null;
}

export interface ThumbnailData {
  id: string;
  attributes: ThumbnailAttributes;
}

export interface Thumbnail {
  data: ThumbnailData;
}

// Exporting the Blog entity types
export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface ImageFormats {
  thumbnail: ImageFormat;
  medium: ImageFormat;
  small: ImageFormat;
  large: ImageFormat;
}

export interface ThumbnailImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Category {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogContent {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}

export interface BlogAttributes {
  Title: string;
  Content: BlogContent[];
  ShortDescription: string;
  Slug: string;
  Thumbnail: ThumbnailImage[];
  Categories: Category[];
  publishedAt: string;
}

export interface Blog {
  id: string;
  attributes: BlogAttributes;
  __typename: string;
}

export interface BlogEntityResponse {
  data: Blog[];
}

// Exporting the response structure
export interface BlogsResponse {
  blogs: BlogEntityResponse;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: PaginationMeta;
  };
}
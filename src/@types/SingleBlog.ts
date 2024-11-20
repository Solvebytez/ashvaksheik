// types.ts
export type BlogPost = {
  id: string;
  attributes: {
    __typename: "Blog";
    Title: string;
    Content: string;
    ShortDescription: string;
    Slug: string;
    Thumbnail: Thumbnail;
    publishedAt: string;
  };
  __typename: "BlogEntity";
};

export type BlogPostData = {
  blog: BlogPostResponse;
};

export type BlogAttibuteData = {
  attributes: BlogPost;
};

export type BlogPostResponse = {
  __typename: string;
  id: string;
  data: BlogPost;
};


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
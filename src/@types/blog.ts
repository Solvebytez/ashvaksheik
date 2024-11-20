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
  export interface BlogAttributes {
    Title: string;
    Content: string;
    ShortDescription: string;
    Slug: string;
    Thumbnail: Thumbnail;
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
  
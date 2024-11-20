import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query {
    blogs(sort: "publishedAt:desc") {
      data {
        id
        id
        attributes {
          Title
          publishedAt
          Slug
          ShortDescription
          Content
          Thumbnail {
            data {
              id
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
        }
      }
    }
  }
`;

export const SIDEBAR_LIST = gql`
  query {
    blogs(pagination: { page: 1, pageSize: 4 }) {
      data {
        id
        attributes {
          Title
          publishedAt
          Slug
          ShortDescription
          Content
          Thumbnail {
            data {
              id
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
        }
      }
    }
  }
`;

export const HOME_PAGE_BLOG= gql`
  query {
    blogs(pagination: { page: 1, pageSize: 3 }) {
      data {
        id
        attributes {
          Title
          publishedAt
          Slug
          ShortDescription
          Content
          Thumbnail {
            data {
              id
              attributes {
                url
                alternativeText
                caption
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          page
        }
      }
    }
  }
`;



export const GET_BLOG_BY_ID = gql`
  query GetBlogById($id: ID!) {
    blog(id: $id) {
      data {
        id
        
        attributes {
          Title
          Content
          ShortDescription
          publishedAt
          Thumbnail {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
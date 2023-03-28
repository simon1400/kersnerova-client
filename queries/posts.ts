import { gql } from "@apollo/client";

export const getPost = gql`
  query getPost($slug: String!, $locale: I18NLocaleCode!) {
    posts(filters: { slug: { eq: $slug } }, locale: $locale) {
      data {
        attributes {
          title
          chapters{
            ... on ComponentChapterTitle{
              title
            }
            ... on ComponentChapterContent{
              content:text
            }
            ... on ComponentChapterButton{
              text
              link
            }
          }
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          meta {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          localizations {
            data{
              attributes{
                slug
                locale
              }
            }
          }
        }
      }
    }
  }
`;


export const getLastPosts = gql`
  query getPosts($locale: I18NLocaleCode!) {
    posts(
      pagination: {pageSize:5, page:1}
      sort: "publishedAt:desc"
      locale: $locale
    ) {
      data {
        attributes {
          title
          slug
          perex
          image {
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

export const getAllPosts = gql`
  query getPosts($locale: I18NLocaleCode!) {
    posts(sort: "publishedAt:desc", locale: $locale){
      data {
        attributes {
          title
          slug
          perex
          image {
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



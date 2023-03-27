import { gql } from "@apollo/client";

export const getArticle = gql`
  query getArticle($slug: String!, $locale: I18NLocaleCode!) {
    articles(filters: { slug: { eq: $slug } }, locale: $locale) {
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

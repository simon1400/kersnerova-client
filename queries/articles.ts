import { gql } from "@apollo/client";

export const getArticle = gql`
  query getArticle($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
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
        }
      }
    }
  }
`;

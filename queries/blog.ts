import { gql } from "@apollo/client";

const blogQuery = gql`
  query Blog($locale: I18NLocaleCode!) {
    blog(locale: $locale) {
      data {
        attributes {
					title
          meta {
            title
            description
          }
        }
      }
    }
  }
`

export default blogQuery
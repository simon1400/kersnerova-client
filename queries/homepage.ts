import { gql } from "@apollo/client";

const homepageQuery = gql`
  query Homepage($locale: I18NLocaleCode!) {
    homepage(locale: $locale) {
      data {
        attributes {
					content
          sliderTitle
          meta {
            title
            description
          }
        }
      }
    }
  }
`

export default homepageQuery
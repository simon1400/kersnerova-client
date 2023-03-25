import { gql } from "@apollo/client";

const navHeader = gql`
  query Nav($locale: I18NLocaleCode!) {
    nav(locale: $locale) {
      data {
        attributes {
          topNav {
            title
            url
          }
        }
      }
    }
  }
`

export default navHeader
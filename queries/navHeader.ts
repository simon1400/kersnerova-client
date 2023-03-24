import { gql } from "@apollo/client";

const navHeader = gql`
  query Nav {
    nav {
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
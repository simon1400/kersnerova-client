import { gql } from "@apollo/client";

const globalQuery = gql`
  query Global {
    global {
      data {
        attributes {
          footerInfo
        }
      }
    }
  }
`

export default globalQuery
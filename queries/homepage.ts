import { gql } from "@apollo/client";

const homepageQuery = gql`
  query Homepage {
    homepage {
      data {
        attributes {
					content
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
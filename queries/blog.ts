import { gql } from "@apollo/client";

const blogQuery = gql`
  query Blog {
    blog {
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
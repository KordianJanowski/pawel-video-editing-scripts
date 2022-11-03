import { gql } from "@apollo/client";

export const GET_SCRIPTS = gql`
  query {
    scripts {
      data {
        id
        attributes {
          title,
          code
        }
      }
    }
  }
`
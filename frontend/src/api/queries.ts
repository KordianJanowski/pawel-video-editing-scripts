import { gql } from "@apollo/client";

export const GET_SCRIPTS = gql`
  query {
    scripts {
      data {
        attributes {
          title,
          code
        }
      }
    }
  }
`
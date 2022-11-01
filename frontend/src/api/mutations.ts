import { gql } from "@apollo/client";

export const ADD_SCRIPT = gql`
  mutation ($scriptCode: String!, $scriptTitle: String!) {
    createScript(
      data: {
        title: $scriptTitle,
        code: $scriptCode,
        publishedAt: "0001-01-01T00:00:00.000Z"
      }
    ) {
      data {
        attributes {
          title,
          code
        }
      }
    }
  }
`
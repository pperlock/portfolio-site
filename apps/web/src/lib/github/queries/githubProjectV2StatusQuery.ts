export const query = `
  query($user: String!, $projectNumber: Int!) {
    user(login: $user) {
      projectV2(number: $projectNumber) {
        items(first: 100) {
          nodes {
            content {
              ... on Issue {
                number
              }
            }
            fieldValueByName(name: "Status") {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
              }
            }
          }
        }
      }
    }
  }
`

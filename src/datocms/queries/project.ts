export const GET_PROJECTS = `
  query GetProjects {
    allProjects {
      id
      title
      description
      technologies
      mainImage {
        url
        alt
      }
      moreImages {
        url
        alt
      }
    }
  }
`;
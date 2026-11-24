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
        width
        height
      }
      moreImages {
        url
        alt
      }
    }
  }
`;

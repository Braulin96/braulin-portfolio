import { GraphQLClient} from 'graphql-request';

const endPoint = 'https://graphql.datocms.com/';

export const datomcmsClient = new GraphQLClient(endPoint, {
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_DATOCMS_API_TOKEN}`,
        'X-Environment': import.meta.env.VITE_DATOCMS_ENVIRONMENT || 'main',
    },
})
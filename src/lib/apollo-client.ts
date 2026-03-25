import { env } from '@/env';
import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: env.NEXT_PUBLIC_STRAPI_URL, // Replace with your Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
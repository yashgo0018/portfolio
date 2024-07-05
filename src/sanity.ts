import { ApolloClient, InMemoryCache } from "@apollo/client";

export const sanityEndpoint = `https://y34q5jiu.api.sanity.io/v2023-08-01/graphql/production/default`;

export const sanityClient = new ApolloClient({
  uri: sanityEndpoint,
  cache: new InMemoryCache(),
});

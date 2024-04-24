import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

// authenticate client on server. Construct header
const AuthLink = (operation, next) => {
  const token = localStorage.getItem('jwt');
  if(token){
    operation.setContext(context => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: `Bearer ${token}`,
      },
    }));
  }
  return next(operation);
}



const client = new ApolloClient({
  // called every time request is made
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if(graphQLErrors){
        graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
        if (networkError){
          console.log(`[Network Error]: ${networkError}`);
        }
      }
    }),
    AuthLink,
    new HttpLink({
      uri: 'http://localhost:8000/graphql',
      credentials: 'same-origin',
    }),  
  ]),
  cache: new InMemoryCache(),
});

export default client;

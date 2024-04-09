import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from '@apollo/client/react';
import App from './App';
import client from "./apollo";

/* 
client.query({
  query: gql`
  {
    posts {
      id
      text
      user {
        avatar
        username
      }
    }
  }`
}).then(result => console.log(result)); 
*/

ReactDOM.render(
  <ApolloProvider client={ client} >
    <App />
  </ApolloProvider>, document.getElementById('root')
);

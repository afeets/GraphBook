import React, { createContext } from "react";
import { ApolloConsumer } from "@apollo/client";
import { GET_CURRENT_USER } from "../../apollo/queries/currentUser";


export const UserConsumer = ({ children }) => {
  return (
    <ApolloConsumer>
      { client => {
        const result = client.readQuery({ query: GET_CURRENT_USER })
        return React.Children.map(children, function(child){
          return React.cloneElement(child, { user: result?.currentUser ? result.currentUser : null });
        });
      }}
    </ApolloConsumer>
  )
}
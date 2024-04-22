import React, { createContext } from "react";
import { ApolloConsumer } from "@apollo/client";


export const UserConsumer = ({ children }) => {
  return (
    <ApolloConsumer>
      { client => {
        // use client.readQuery to get current logged in user
        const user = {
          username: "Test User",
          avatar: "/uploads/avatar1.png"
        };
        return React.Children.map(children, function(child){
          return React.cloneElement(child, { user });
        });
      }}
    </ApolloConsumer>
  )
}
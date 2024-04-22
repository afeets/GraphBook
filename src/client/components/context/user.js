import React, { createContext } from "react";

// setup empty context
const { Provider, Consumer} = createContext();

// use provider
export const UserProvider = ({ children }) => {
  const user = {
    username: "Test User",
    avatar: "/uploads/avatar1.png"
  };

  return (
    <Provider value={ user}>
      { children }
    </Provider>
  );
}

// consumer takes care of passing data to underlying components
export const UserConsumer = ({ children }) => {
  return (
    <Consumer>
      { user => React.Children.map(children, function(child){ 
          return React.cloneElement(child, { user })
      })}
    </Consumer>
  )
}

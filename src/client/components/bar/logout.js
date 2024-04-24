import React from "react";
// gain access to apollo client to remove all data
import { withApollo } from '@apollo/client/react/hoc'; 

const Logout = ({ changeLoginState, client }) => {
  const logout = () => {
    localStorage.removeItem('jwt');
    changeLoginState(false);
    client.stop();
    client.resetStore();
  }

  return (
    <button className="logout" onClick={logout}>Logout</button>
  )
}

export default withApollo(Logout);
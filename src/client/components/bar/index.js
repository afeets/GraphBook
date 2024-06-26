import React from "react";
import SearchBar from "./search";
import Logout from './logout';

import { UserConsumer } from "../context/user";
import UserBar from "./user";

const Bar = ({ changeLoginState }) => {
  return (
    <div className="topbar">
      <div className="inner">
        <SearchBar />
        <UserConsumer>
          <UserBar />
        </UserConsumer>
      </div>
      <div className="buttons"><Logout changeLoginState={changeLoginState} /></div>
    </div>
  );
}

export default Bar
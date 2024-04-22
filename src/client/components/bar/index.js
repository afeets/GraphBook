import React from "react";
import SearchBar from "./search";
import { UserConsumer } from "../context/user";
import UserBar from "./user";

const Bar = () => {
  return (
    <div className="topbar">
      <div className="inner">
        <SearchBar />
        <UserConsumer>
          <UserBar />
        </UserConsumer>
      </div>
    </div>
  );
}

export default Bar
import React from "react";

const UserBar = ({ user }) => {
  if(!user) return null;
  return (
    <div className="user">
      <img src={user.avatar} alt={user.username} />
      <span>{ user.username }</span>
    </div>
  );
}

export default UserBar
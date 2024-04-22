import React from "react";

export default ({ post }) => {
  return (
    <div className="header">
      <img src={ post.user.avatar } alt={post.user.username} />
      <div>
        <h2>{ post.user.username }</h2>
      </div>
    </div>
  );
}
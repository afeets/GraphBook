import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Feed from './Feed';
import Chats from "./Chats";
import '../assets/css/style.css';
import { gql } from '@apollo/client';

const App = () => {
  
  return (
    <div className="container">
      <Helmet>
        <title>Graphbook - Feed</title>
        <meta name="description" content="Newsfeed of all users on Graphbook" />
      </Helmet>
      <Feed />
      <Chats />
    </div>
  )
}

export default App
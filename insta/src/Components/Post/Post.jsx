import React from 'react';
import './Post.css';

const Post = ({ image, username, caption }) => {
  return (
    <div className="post">
      <img src={image} alt={username} />
      <h3>{username}</h3>
      <p>{caption}</p>
    </div>
  );
};

export default Post;

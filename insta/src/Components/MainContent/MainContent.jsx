import React from 'react';
import Stories from '../Stories/Stories';
import Post from '../Post/Post';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <Stories />
      <Post image="/images/post1.jpg" username="user1" caption="A beautiful day!" />
      <Post image="/images/post2.jpg" username="user2" caption="Nature's beauty." />
    </main>
  );
};

export default MainContent;

import React from 'react';
import './Stories.css';

const Stories = () => {
  const stories = [
    { id: 1, image: '/images/story1.jpg', username: 'user1' },
    { id: 2, image: '/images/story2.jpg', username: 'user2' },
  ];

  return (
    <div className="stories">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.image} alt={story.username} />
          <p>{story.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;

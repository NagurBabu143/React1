import React from "react";
import "./Profile.css";

const Profile = () => {
  const posts = [
    { id: 1, image: "/images/post1.jpg" },
    { id: 2, image: "/images/post2.jpg" },
  ];

  return (
    <div className="profile">
      <div className="profile-header">
        <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>@username</h2>
          <p>Bio: Photographer | Traveler | Dreamer</p>
        </div>
      </div>
      <div className="highlights">
        <img src="/images/highlight1.jpg" alt="Highlight 1" />
        <img src="/images/highlight2.jpg" alt="Highlight 2" />
        <img src="/images/highlight3.jpg" alt="Highlight 3" />
      </div>
      <div className="profile-posts">
        {posts.map((post) => (
          <img key={post.id} src={post.image} alt={`Post ${post.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Profile;

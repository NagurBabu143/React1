import React from 'react';
import './Home.css'; 

const Home = ({ Logout }) => {
  return (
    <div className="home-page">
      <button className="logout-btn" onClick={Logout}>
        Logout
      </button>

      <h1>Welcome to Your Dashboard</h1>
      <p>
        This is your dashboard where you can manage your account and access features
        tailored to your needs.
      </p>

      <section className="user-info">
        <h2>User Information</h2>
        <p>
          Name: <strong>Shaik Nagurbabu</strong>
        </p>
        <p>
          Email: <strong>ShaikNagurbabu@gmail.com</strong>
        </p>
        <p>
          Member Since: <strong>January 2021</strong>
        </p>
      </section>

      <section className="user-stats">
        <h2>Your Stats</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>Projects Completed</h3>
            <p>5</p>
          </div>
          <div className="stat-item">
            <h3>Messages Sent</h3>
            <p>180</p>
          </div>
          <div className="stat-item">
            <h3>Events Attended</h3>
            <p>5</p>
          </div>
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/profile">Edit Profile</a></li>
          <li><a href="/settings">Account Settings</a></li>
          <li><a href="/activity">View Activity</a></li>
          <li><a href="/support">Get Support</a></li>
        </ul>
      </section>

      <section className="announcements">
        <h2>Announcements</h2>
        <p>
          We're excited to announce that we will be rolling out new features next week!
          Stay tuned for updates.
        </p>
      </section>
    </div>
  );
};

export default Home;
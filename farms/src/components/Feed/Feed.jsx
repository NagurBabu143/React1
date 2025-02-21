import React from "react";
import "./Feed.css";

function Feed({ feedData }) {
  return (
    <div className="feed">
      <h2>Feed Inventory</h2>
      {feedData.map((feed) => (
        <div key={feed.id} className="feed-item">
          <p>Type: {feed.type}</p>
          <p>Quantity: {feed.quantity} kg</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
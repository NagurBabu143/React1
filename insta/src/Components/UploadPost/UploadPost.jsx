import React, { useState } from "react";
import "./UploadPost.css";

const UploadPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ image, caption });
    alert("Post uploaded!");
  };

  return (
    <div className="upload-post">
      <h2>Upload New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default UploadPost;

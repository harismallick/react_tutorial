import React from "react";

const NewPost = ({
  handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
  return (
    <main className="NewPost">
      <h1>New Post</h1>
      <form 
          className="newPostForm"
          onSubmit={handleSubmit}
        >
        <input 
          type="text"
          id="postTitle"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Enter title..." 
        />
        <textarea 
          required
          id="postBody" 
          value={postBody} 
          onChange={(e) => setPostBody(e.target.value)}
          placeholder="Post body..."
        />
        <button
          type="submit"
        >
          Submit Post
        </button>
      </form>
    </main>
  );
};

export default NewPost;

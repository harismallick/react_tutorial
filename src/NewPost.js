import { useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
import { format } from 'date-fns';
// import api from './api/posts';
// import DataContext from "./context/DataContext";
import { useStoreActions, useStoreState } from "easy-peasy";

const NewPost = () => {
  // When using useContext:
  // const { posts, setPosts } = useContext(DataContext);
  // // State management for creating new posts:
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");

  // When using Redux:
  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  // set useNavigate to redirect to another react component:
  let history = useNavigate();

  // Submit new post to db or local storage:
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Give new post an incremented Id based on last post's Id:
    const newId = posts.length ? Number(posts[posts.length - 1].id) + 1 : 0;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
        id: newId.toString(),
        title: postTitle,
        datetime,
        body: postBody
    };
    // try {
    //     const response = await api.post("/posts", newPost);
    //     // const newPostsList = [...posts, newPost];
    //     // We're changing the above line for axios.
    //     // Rather than changing the state client site, we wait for data to be written
    //     // successfully server-side, to allow for posts' state to change client side.
    //     // If something goes wrong during the post request, then the state will not change.
    //     const newPostsList = [...posts, response.data];
    //     setPosts(newPostsList);
    //     // Reset the state of the new post objects:
    //     setPostTitle("");
    //     setPostBody("");
    //     console.log("New post created.");
    //     history('/');
    // } catch (err) {
    //     console.log(`Error: ${err.message}`);
    // }
    savePost(newPost);
    history('/');
}

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

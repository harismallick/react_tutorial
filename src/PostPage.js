import { useParams, Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import DataContext from "./context/DataContext";
// import api from './api/posts';
import { useStoreActions, useStoreState } from "easy-peasy";

const PostPage = () => {
  // const { posts, setPosts } = useContext(DataContext);
  
  // We don't need setPost now, only need to call the delete thunk action:
  const deletePost = useStoreActions((actions) => actions.deletePost);
  
  // Getting id using react-router-dom:
  const { id } = useParams();
  // const post = posts.find(post => post.id.toString() === id);

  // Getting specific post using state variable in Redux:
  // This return a function
  const getPostById = useStoreState((state) => state.getPostById);
  // use this function to get the post:
  const post = getPostById(id);
  let history = useNavigate();

  // Delete a post:
  const handleDelete = async (id) => {
    // try {
    //     await api.delete(`/posts/${id}`);
    //     const newList = posts.filter(post => post.id !== id);
    //     setPosts(newList);
    //     console.log(`Post ${id} deleted.`);

    //     // Redirect a user back to the home page after delete action:
    //     history('/');
    // } catch (err) {
    //     console.log(`Error: ${err.message}`);
    // }
    deletePost(id);
    history('/');
}
  return (
    <main className="PostPage">
      <article className="post">
        {
          post &&
            <>
              <h2>{ post.title }</h2>
              <p className="postDate">{ post.datetime }</p>
              <p className="postBody">{ post.body }</p>
              <Link to={`/edit/${id}`}>
                <button className="editButton">Edit Post</button>
              </Link>
              <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                Delete Post
              </button>
            </>
        }
        {
          !post &&
            <>
              <h2>No post found</h2>
              <p>
                <Link to='/'>
                  Go to home page
                </Link>
              </p>
            </>
        }
      </article>
    </main>
  );
};

export default PostPage;

// import { useState, useEffect, useContext } from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import DataContext from "./context/DataContext";
import { format } from 'date-fns';
// import api from './api/posts';
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPost = () => {
    // State management for updating a blog post:
    // const [editTitle, setEditTitle] = useState("");
    // const [editBody, setEditBody] = useState("");
    // const { posts, setPosts } = useContext(DataContext);

    // When using Redux:
    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);
  
    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);

    const history = useNavigate();
    
    const { id } = useParams();
    // const post = posts.find(post => post.id === id);
    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);
    
    // Update a post, which invovles updating the title and/or the body

    const handleEdit = async (postId) => {
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      const updatedPost = {
          id: postId.toString(),
          title: editTitle,
          datetime,
          body: editBody
      };
    //   try {
    //       const response = await api.put(`/posts/${postId}`, updatedPost);
    //       setPosts(posts.map(post => post.id === postId ? {...response.data} : post));
    //       setEditTitle("");
    //       setEditBody("");
    //       history('/');
    //   } catch (err) {
    //       console.log(`Error: ${err.message}`);
    //   }
      editPost(updatedPost);
      history(`/post/${postId}`);
  }

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className="NewPost">
        {editTitle &&
            <>
                <h1>Edit Post</h1>
                <form 
                    className="newPostForm"
                    onSubmit={(e) => e.preventDefault()}
                >
                <input 
                    type="text"
                    id="postTitle"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Enter title..." 
                />
                <textarea 
                    required
                    id="postBody" 
                    value={editBody} 
                    onChange={(e) => setEditBody(e.target.value)}
                    placeholder="Post body..."
                />
                <button
                    // type="submit"
                    type="button"
                    onClick={() => handleEdit(post.id)}
                >
                    Edit Post
                </button>
                </form>
            </>
        }
        {
          !editTitle &&
            <>
              <h2>No post found</h2>
              <p>
                <Link to='/'>
                  Go to home page
                </Link>
              </p>
            </>
        }
      </main>
    );
};

export default EditPost;

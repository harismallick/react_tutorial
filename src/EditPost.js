import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
    const { id } = useParams();
    const post = posts.find(post => post.id === id);

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
                    type="submit"
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

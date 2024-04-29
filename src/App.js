// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';

// imports for lecture 16 onwards:
import Navbar from './Navbar';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Grocery from './Grocery';
import EditPost from './EditPost';
import { format } from 'date-fns';
import api from './api/posts';
import useWindowSize from './hooks/useWindowSize';

function App() {
  // State management for the blog posts:
  const [posts, setPosts] = useState([]);

  // State management for the search bar:
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // State management for creating new posts:
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  // State management for updating a blog post:
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  // Import width from useWindowSize hook:
  const { width } = useWindowSize();

  // useEffect to search through the posts array:
  useEffect(() => {
    const filteredResults = posts.filter(
      post => (post.body.toLowerCase()).includes(search.toLowerCase()) 
      || (post.title.toLowerCase()).includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

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
    try {
      const response = await api.post("/posts", newPost);
      // const newPostsList = [...posts, newPost];
      // We're changing the above line for axios.
      // Rather than changing the state client site, we wait for data to be written
      // successfully server-side, to allow for posts' state to change client side.
      // If something goes wrong during the post request, then the state will not change.
      const newPostsList = [...posts, response.data];
      setPosts(newPostsList);
      // Reset the state of the new post objects:
      setPostTitle("");
      setPostBody("");
      console.log("New post created.");
      history('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  let history = useNavigate();

  // Fetch user's data from the db:
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        // Axios API with automatically throw error if response not in 200 range.
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // A response status not in the 200 range and not in the 400 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  // Delete a post:
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const newList = posts.filter(post => post.id !== id);
      setPosts(newList);
      console.log(`Post ${id} deleted.`);

      // Redirect a user back to the home page after delete action:
      history('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  // Update a post, which invovles updating the title and/or the body

  const handleEdit = async (postId) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id: postId.toString(),
      title: editTitle,
      datetime,
      body: editBody
    };
    try {
      const response = await api.put(`/posts/${postId}`, updatedPost);
      setPosts(posts.map(post => post.id === postId ? {...response.data} : post));
      setEditTitle("");
      setEditBody("");
      history('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  return (
    <div className="App">
      <Header title="Groceries" width={width} />
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/grocery" element={<Grocery />} />
        
        <Route path="/" element={<Home posts={searchResults} />} />
          
        <Route path="/post" element={<NewPost 
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} 
        />
        <Route path="/edit/:id" element={<EditPost 
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
            posts={posts}
          />} 
        />

        <Route path="/post/:id" element={<PostPage 
            posts={posts}
            handleDelete={handleDelete}
          />} 
        />
          
        <Route path='/about' element={<About />} />

        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer 
        // length={items.length}
      />
    </div>
  );
}

export default App;

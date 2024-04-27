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

function App() {

  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "First Post",
      datetime: "July 01, 2023 11:17:36 AM",
      body: "Hello world"
    },
    {
      id: "2",
      title: "Second Post",
      datetime: "July 02, 2023 11:19:36 AM",
      body: "Hello again world"
    }
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  let history = useNavigate();

  // Delete a post:
  const handleDelete = (id) => {
    const newList = posts.filter(post => post.id !== id);
    setPosts(newList);
    console.log(`Post ${id} deleted.`);

    // Redirect a user back to the home page after delete action:
    history('/');
  }
  return (
    <div>
      <Header title="Groceries"/>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/grocery" element={<Grocery />} />
        
        <Route path="/" element={<Home posts={posts} />} />
          
        <Route path="/post" element={<NewPost />} />

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

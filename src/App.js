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
import { Route, Routes, useHistory } from 'react-router-dom';
import Grocery from './Grocery';

function App() {

  return (
    <div className="container">
      <Header title="Groceries"/>
      <Navbar />
      <Routes>
        <Route path="/grocery" element={<Grocery />} />
        
        <Route path="/" element={<Home />} />
          
        <Route path="/post" element={<NewPost />} />

        <Route path="/post/id" element={<PostPage />} />
          
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

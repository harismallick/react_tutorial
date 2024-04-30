// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Grocery from './Grocery';
// imports for lecture 16 onwards:
import Navbar from './Navbar';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';

import { Route, Routes } from 'react-router-dom';

// Commented for Lecture 22 on Redux implementation:
// import { DataProvider } from './context/DataContext';

// Imports for Lecture 22:
import { useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';


function App() {
  // Functionality brought back into App from DataContext as it cannot be declared in easy-peasy:
  
  const setPosts = useStoreActions((actions) => actions.setPosts);

  // Custom hook to make db calls:
  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );
  // Set posts to the data from the db:
  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);

  return (
    <div className="App">
      <Header title="Groceries" />
      {/* <DataProvider> */}
        <Navbar />
        <Routes>
          <Route path="/grocery" element={<Grocery />} />
          
          <Route path="/" element={<Home 
              isLoading={isLoading}
              fetchError={fetchError}
            />} 
          />
            
          <Route path="/post" element={<NewPost />} />

          <Route path="/edit/:id" element={<EditPost />} />

          <Route path="/post/:id" element={<PostPage />} />
            
          <Route path='/about' element={<About />} />

          <Route path='*' element={<Missing />} />
        </Routes>
      {/* </DataProvider> */}

      <Footer 
        // length={items.length}
      />
    </div>
  );
}

export default App;

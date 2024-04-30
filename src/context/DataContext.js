import { createContext, useState, useEffect } from "react";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({}); // initialise with empty object

export const DataProvider = ({ children }) => {
    // State management for the blog posts:
    const [posts, setPosts] = useState([]);

    // State management for the search bar:
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Import width from useWindowSize hook:
    // const { width } = useWindowSize();

    // Custom hook to make db calls:
    const { data, fetchError, isLoading } = useAxiosFetch(
        "http://localhost:3500/posts"
    );
    // Set posts to the data from the db:
    useEffect(() => {
        setPosts(data);
    }, [data]);

    // useEffect to search through the posts array:
    useEffect(() => {
        const filteredResults = posts.filter(
            post => (post.body.toLowerCase()).includes(search.toLowerCase()) 
            || (post.title.toLowerCase()).includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    }, [posts, search]);

    // Fetch user's data from the db:
    // This made redundant in chapter 20. Custom hook used instead.

    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     try {
    //       const response = await api.get("/posts");
    //       // Axios API with automatically throw error if response not in 200 range.
    //       setPosts(response.data);
    //     } catch (err) {
    //       if (err.response) {
    //         // A response status not in the 200 range and not in the 400 range
    //         console.log(err.response.data);
    //         console.log(err.response.status);
    //         console.log(err.response.headers);
    //       } else {
    //         console.log(`Error: ${err.message}`);
    //       }
    //     }
    //   };
    //   fetchPosts();
    // }, []);

    return (
        <DataContext.Provider 
            value={{
                search, setSearch,
                searchResults, fetchError, isLoading,
                posts, setPosts
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
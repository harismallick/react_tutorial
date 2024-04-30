import { useStoreState } from "easy-peasy";

const Footer = ({ length }) => {
    // const today = new Date();
    // today.getFullYear()
    const totalPosts = useStoreState((state) => state.postCount);
    return (

        <footer className="Footer">
            {/* <p>
                {length} List {length === 1 ? "item" : "items"}
            </p> */}
            <p>
                Copyright &copy; {totalPosts} Blog Posts
            </p>
        </footer>
    )
}

export default Footer

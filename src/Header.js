import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"
import { useContext } from "react";
import DataContext from "./context/DataContext";

// Changed header to main.
// const Header = (props) => {
//   return (
//     <header>
//         <h2>{ props.title }</h2>
//     </header>
//   )
// }

// The props object can be destructured for cleaner looking code:

const Header = ({ title }) => {

  const { width } = useContext(DataContext);
  
  return (
    <header className='Header'>
        <h1>{ title }</h1>
        {
          width < 768 ? <FaMobileAlt />
            : width < 992 ? <FaTabletAlt />
              : <FaLaptop />
        }
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}
// If no prop is passed into this component function, then it will throw an error.
// This can be avoided be setting default value for props.

export default Header

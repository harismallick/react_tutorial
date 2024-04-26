import React from 'react'
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
  return (
    <header>
        <h2>{ title }</h2>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}
// If no prop is passed into this component function, then it will throw an error.
// This can be avoided be setting default value for props.

export default Header

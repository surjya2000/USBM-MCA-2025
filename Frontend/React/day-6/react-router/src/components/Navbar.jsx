// eslint-disable-next-line no-unused-vars
import React from 'react';


import{Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex">
        <ul className="flex justify-around">
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/about"></Link>
            </li>
            <li>
                <Link to="/contact"></Link>
            </li>
            <li>
                <Link to="/blogs"></Link>
            </li>
        </ul>
    </nav>
      

  );
}

export default Navbar;

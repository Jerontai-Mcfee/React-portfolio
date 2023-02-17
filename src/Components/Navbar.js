import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <div classname="toggleButton">
            
            <button></button>
        </div>
      <div className="Links">
      <Link to="/"> Home </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;

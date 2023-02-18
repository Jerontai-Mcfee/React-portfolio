import React, {useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
    // Be sure to import useState into react.
    const [expandNavbar, setExpandNavbar] = useState(false);

// set it so it always knows where to set location when clicked
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (

    // if expandNavbar is true then you want to close if false
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            
            <button 
            onClick={() => {
                setExpandNavbar((prev) => !prev);
            }}
            >
                {/* Adds button for when it goes to different screen size */}
                
                <ReorderIcon />
            </button>
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

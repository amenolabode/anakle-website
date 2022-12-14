import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  const [click, setClick] = useState(false);
  
  const menuToggleHandler = () => setClick(!click);

  return (
    <>
      <header className="header">
        <div className="navbar-content">
          <h2 className="navbar-logo">ANAKLE</h2>
          <nav className={click ? "navbar-items open-menu" : "navbar-items"}>
            <ul>
              <li>
                {/* <a href="#">Home</a> */}
                <Link to="/"> Home</Link>
              </li>
              {/* <li>
                <a href="#">Our Menu</a>
              </li> */}
              {/* <li>
                <a href="#">Our Thoughts</a>
              </li> */}
              <li>
                {/* <a href="#">Our People</a> */}
                <Link to="/ourteam"> Our Team </Link>
                
              </li>
              {/* <li>
                <a href="#">Join Us</a>
              </li> */}
            </ul>

            <button className="nav-button">Contact Us</button>
          </nav>

          <button className="nav-button toggle" onClick={menuToggleHandler}>
            {click ?  <FaTimes /> : <IoGrid />}
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;

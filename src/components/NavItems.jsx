import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../context/AuthProvider";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  //auth info

  const {user} = useContext(AuthContext)
  //console.log(user)
  // Add event listener for scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          {/* <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to="/login"><span>Log In</span></Link>
                </div> */}
        </div>
      </div>

      {/* header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo*/}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            {/* Menu area*/}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Signup / login for large screens */}
              <div className="d-none d-md-block">
                <Link to="/signup" className="lab-btn me-3">
                  <span>Create Account</span>
                </Link>
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </div>

              {/* Menu toggler for small screens */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className="header-bar d-lg-none"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Toggle icon for small screens */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => {
                  if (!menuToggle) setSocialToggle(!socialToggle);
                }}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;

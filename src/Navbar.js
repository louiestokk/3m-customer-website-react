import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdMobileScreenShare } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState("");
  const toggle = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="navbar">
        <div className="con-1">
          <FaBars className="nav-btn" onClick={() => setShow(!show)} />
          <div className="logo-container">
            <div>
              <h2>m</h2>
            </div>
            <div>
              <h2>m</h2>
            </div>
            <div>
              <h2>m</h2>
            </div>
          </div>
        </div>
        <div className="nav-contact">
          <a href="tel:+255779912498">
            <MdMobileScreenShare />
          </a>
          <a href="mailto: mzeemm1982@gmail.com">
            <HiOutlineMail />
          </a>
        </div>
      </div>
      <div className={`${show ? "nav-menu show" : "nav-menu"}`}>
        <ul>
          <li>
            <Link to="/" className="navlink" onClick={toggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="navlink" onClick={toggle}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navlink" onClick={toggle}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

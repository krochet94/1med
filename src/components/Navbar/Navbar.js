import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/js/src/collapse";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const navigate = useNavigate();
  const [toggler, setToggler] = useState(true)
  return (
    <>
      <nav className="navbar navbar-expand-lg container-fluid d-flex justify-content-between shadow">
        <div className="p-1 navbar-brand h-100 align-items-center justify-content-start d-flex flex-nowrap p-2">
          <Link to="/" className="h-100 me-3">
            <img
              src={"/logo.png"}
              className="img-fluid logo h-100"
              alt="krochet"
            />
          </Link>
          <h4 className="text-white">
            1MED Medical Equipment
            <br />
            and Supplies Trading
          </h4>
        </div>
        <div
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>setToggler(!toggler)}
        >
          {toggler ? <FaBars/> : <FaTimes/>}
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navlinks align-items-center h-100 text-center text-nowrap justify-content-end navbar-nav">
            <li className="nav-item" onClick={() => navigate("/")}>
              HOME
            </li>
            <li className="nav-item">ABOUT US</li>
            <li className="nav-item">PRODUCTS</li>
            <li className="nav-item">CONTACT</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

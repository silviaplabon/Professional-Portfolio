import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const Header = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  navbarDesign container pt-5">
          <div className="container-fluid ">
            <h1 className="navbar-brand h2HeaderColor fw-bold text-white" href="#">SILVIA</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav text-white">
                <Link to="/" className="nav-link text-white">Home</Link>
                <Link to="/orders" className=" nav-link text-white">About</Link>
                <Link to="/admin" className="nav-link text-white">Projects</Link>
                <Link to="/" className="nav-link text-white">Blogs</Link>
                <Link to="/" className="nav-link text-white">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        </div>
    );
};

export default Header;
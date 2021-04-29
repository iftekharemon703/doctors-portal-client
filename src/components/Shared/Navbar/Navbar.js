import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link class="nav-link  ms-5 active" aria-current="page" to="/">
                  Home
                </Link>
                <Link class="nav-link  ms-5" to="/about">
                  About
                </Link>
                <Link class="nav-link ms-5" to="/dashboard">
                  Dashboard
                </Link>
                <Link class="nav-link ms-5 text-white" to="admin">
                  Admin
                </Link>
                <Link class="nav-link ms-5 text-white" to="/blog">
                  Blogs
                </Link>
                <Link class="nav-link text-white ms-5" to="/contact">
                  Contact Us
                </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

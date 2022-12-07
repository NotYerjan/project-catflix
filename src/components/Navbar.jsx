import * as React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <ul className="navBarContent">
        <li>
          <Link to="/movies"><FiHome  className="navBarIcon"/></Link>
        </li>
        <li>
          <Link to="/liked"><FiHeart  className="navBarIcon"/></Link>
        </li>
        <li>
          <Link to="/users"><FiUser   className="navBarIcon"/></Link>
        </li>
        <li>
          <Link to="/search"><FiSearch   className="navBarIcon"/></Link>
        </li>
      </ul>
    </div>
  );
}

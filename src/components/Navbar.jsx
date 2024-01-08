import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/products"}>Posts</NavLink>
      <NavLink to={"/users"}>Users</NavLink>
    </nav>
  );
};

export default Navbar;

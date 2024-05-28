import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 items-center bg-navbar-bg py-4">
      <p className="text-lg font-sans-serif font-bold capitalize text-white">Virtual Portfolio</p>
      <ul className="flex items-center gap-8 text-lg font-sans-serif font-bold capitalize text-white">
        <li>home</li>
        <li> about</li>
        <li>Portfolio</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

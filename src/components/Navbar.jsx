// import { useState } from "react";

import { logo } from "../assets";
// import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full flex py6 justify-between items-center navbar">
      <img src={logo} alt="silverBank" className="w-[124px] h-[32px]" />
    </nav>
  );
};

export default Navbar;

import React from "react";
import NavSearch from "../../NavSearch";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import NavUser from "./NavUser";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <NavSearch />
        <MobileNav />
        <NavLinks />
        <NavUser />
      </nav>
    </>
  );
};

export default Navbar;

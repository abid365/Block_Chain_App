import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/logo.png";
const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const NavBar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* todo: Make the navbar relevant */}
        <img src={logo} className="w-32 cursor-pointer" alt="logo" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item}></NavBarItem>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

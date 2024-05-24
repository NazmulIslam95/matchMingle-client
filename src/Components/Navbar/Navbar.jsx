import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/MatchMingle Logo.png";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);
    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "bold",
      backgroundColor: isActive ? "#ffffff00" : "",
      // color: isActive ? "#EEFF25" : "#fff",
      borderBottom: isActive ? "2px solid #C49056" : "none",
    };
  };

  const navItems = (
    <>
      <li className="group flex  cursor-pointer flex-col">
        <NavLink style={navLinkStyles} to="/">
          Home
          
        </NavLink>
      </li>
      <li className="group flex  cursor-pointer flex-col">
        <NavLink style={navLinkStyles} to="/biodatas">
          Biodatas
         
        </NavLink>
      </li>
      <li className="group flex  cursor-pointer flex-col">
        <NavLink style={navLinkStyles} to="/aboutUs">
          About Us
          
        </NavLink>
      </li>
      <li className="group flex  cursor-pointer flex-col">
        <NavLink style={navLinkStyles} to="/contactUs">
          Contact Us
          
        </NavLink>
      </li>
      <li className="group flex  cursor-pointer flex-col">
        <NavLink style={navLinkStyles} to="/login">
          Login
          
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" fixed z-20 w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-black">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-125">
          <Link to="/">
            <img src={logo} alt="" className="w-32" />
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          {navItems}
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <FaBars className="text-3xl"></FaBars>
          {dropDownState && (
            <ul className="gap-4 bg-black bg-opacity-60 text-white px-6 py-8 absolute right-0 top-11 flex w-[200px] flex-col rounded-md   text-base ">
              {navItems}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

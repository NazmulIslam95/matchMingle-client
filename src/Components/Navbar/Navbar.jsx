import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/MatchMingle Logo.png";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User Successfully Logged Out",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bolder" : "bold",
      backgroundColor: isActive ? "#ffffff00" : "",
      color: isActive ? "#956631" : "#956631",
      borderBottom: isActive ? "2px solid #956631" : "none",
    };
  };

  const navItems = (
    <>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink className="hover:scale-110 duration-300" style={navLinkStyles} to="/">
          Home
        </NavLink>
      </li>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink className="hover:scale-110 duration-300" style={navLinkStyles} to="/biodatas">
          Biodatas
        </NavLink>
      </li>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink className="hover:scale-110 duration-300" style={navLinkStyles} to="/aboutUs">
          About Us
        </NavLink>
      </li>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink className="hover:scale-110 duration-300" style={navLinkStyles} to="/contactUs">
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <>
          <li className="uppercase hover:scale-110 duration-300">
            <NavLink className="" style={navLinkStyles} to="/dashboard/adminHome">
              DASHBOARD
            </NavLink>
          </li>
          <li className="uppercase hover:scale-110 duration-300 font-bold text-[#956631]">
            <Link className="" onClick={handleLogOut}>Log Out</Link>
          </li>
        </>
      ) : (
        <li className="uppercase">
          <NavLink className="hover:scale-110 duration-300" style={navLinkStyles} to="/login">
            Log In
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className=" fixed z-20 w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-black">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
          <Link to="/">
            <img src={logo} alt="" className="w-32" />
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-8 md:flex">
          {navItems}
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <FaBars className="text-3xl"></FaBars>
          {dropDownState && (
            <ul className="gap-4 bg-black bg-opacity-60 px-6 py-8 absolute right-0 top-11 flex w-[200px] flex-col rounded-md   text-base ">
              {navItems}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

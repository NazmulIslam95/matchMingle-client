import { useContext, useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/MatchMingle Logo.png";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [dropDownState, setDropDownState] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const dropDownMenuRef = useRef();
  const [isAdmin] = useAdmin();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg("bg-black bg-opacity-20");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      color: isActive ? "#956631" : "#956631",
      borderBottom: isActive ? "2px solid #956631" : "none",
    };
  };

  const navItems = (
    <>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink
          className="hover:scale-110 duration-300"
          style={navLinkStyles}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink
          className="hover:scale-110 duration-300"
          style={navLinkStyles}
          to="/biodatas"
        >
          Biodatas
        </NavLink>
      </li>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink
          className="hover:scale-110 duration-300"
          style={navLinkStyles}
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li className="uppercase group flex  cursor-pointer flex-col">
        <NavLink
          className="hover:scale-110 duration-300"
          style={navLinkStyles}
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <>
          {user && isAdmin && (
            <li className="uppercase hover:scale-110 duration-300">
              <NavLink
                className=""
                style={navLinkStyles}
                to="/dashboard/adminDashboard"
              >
                DASHBOARD
              </NavLink>
            </li>
          )}
          {user && !isAdmin && (
            <li className="uppercase hover:scale-110 duration-300">
              <NavLink
                className=""
                style={navLinkStyles}
                to="/dashboard/viewBiodata"
              >
                DASHBOARD
              </NavLink>
            </li>
          )}
        </>
      ) : (
        <li className="uppercase">
          <NavLink
            className="hover:scale-110 duration-300"
            style={navLinkStyles}
            to="/login"
          >
            Log In
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`lg:fixed z-20 w-full transition-colors duration-300 ${navbarBg}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:py-2 text-black">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
          <Link to="/">
            <img src={logo} alt="" className="w-20 lg:w-32" />
          </Link>
        </div>
        <ul className="hidden lg:flex items-center justify-between gap-8 ">
          {navItems}
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform lg:hidden"
        >
          <FaBars className="text-3xl"></FaBars>
          {dropDownState && (
            <ul className="gap-4 bg-black bg-opacity-60 px-6 py-8 z-50 absolute right-0 top-11 flex w-[200px] flex-col rounded-md text-base ">
              {navItems}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

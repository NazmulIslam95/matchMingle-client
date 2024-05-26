import { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/MatchMingle Logo.png";
import logo2 from "../../assets/logo.png";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import useFavBio from "../../Hooks/useFavBio";

const Dashboard = () => {
  const [favBio] = useFavBio();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
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
      border: isActive ? "2px solid #956631" : "none",
      borderRadius: isActive ? "8px" : "0",
    };
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/k2Tsg85/bg.jpg')`,
        minHeight: "100vh",
      }}
      className="bg-no-repeat bg-cover flex"
    >
      <div className="border-r-2 border-[#d8752330] pt-4 lg:pt-10 md:w-1/12 lg:w-1/5 h-screen">
        <div className="h-full p-3 space-y-2 w-full  text-black">
          <div className="divide-y divide-gray-200">
            <Link to="/">
              <div className="hover:scale-110 duration-200 lg:flex items-center justify-center hidden">
                <img src={logo} alt="" className="w-32 " />
              </div>
              <div className=" flex items-center justify-center lg:hidden">
                <img src={logo2} alt="" className="w-32 " />
              </div>
            </Link>
            <ul className="flex flex-col items-center lg:block pt-2 pb-4 space-y-4 ml-0 lg:ml-4 text-sm">
              <li className="hover:scale-110 duration-200">
                <NavLink
                  style={navLinkStyles}
                  to="/dashboard/editBiodata"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaEdit className="text-2xl text-[#956640]"></FaEdit>
                  <span className="text-[#956640]  hidden lg:block">
                    Edit Biodata
                  </span>
                </NavLink>
              </li>

              <li className="hover:scale-110 duration-200">
                <NavLink
                  style={navLinkStyles}
                  to="/dashboard/viewBiodata"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <FaEye className="text-2xl text-[#956640]"></FaEye>
                  <span className="text-[#956640]  hidden lg:block">
                    View Biodata
                  </span>
                </NavLink>
              </li>

              <li className="hover:scale-110 duration-200">
                <NavLink
                  style={navLinkStyles}
                  to="/dashboard/MyContactRequest"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdContacts className="text-2xl text-[#956640]" />
                  <span className="text-[#956640]  hidden lg:block">
                    My Contact Request
                  </span>
                </NavLink>
              </li>

              <li className="hover:scale-110 duration-200">
                <NavLink
                  style={navLinkStyles}
                  to="/dashboard/favoritesBiodata"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdFavorite className="text-2xl text-[#956640]" />
                  <span className="text-[#956640] hidden lg:block">
                    Favorites Biodata ({favBio.length})
                  </span>
                </NavLink>
              </li>

              <li className="hover:scale-110 duration-200">
                <Link
                  onClick={handleLogOut}
                  className="flex items-center font-bold p-2 space-x-3"
                >
                  <IoIosLogOut className="text-2xl text-[#956640]" />
                  <span className="text-[#956640] hidden lg:block">
                    Log out
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center p-2">
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-[#956631]"
              />
              <div>
                <div className="border-2 -ml-3 border-l-0 border-[#956631] rounded-r-md">
                  <h2 className="hidden ml-6 py-2 pr-10 lg:block text-lg text-[#956640] font-semibold">
                    {user?.displayName}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-[#d8752330] w-4/5 mx-auto h-screen">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

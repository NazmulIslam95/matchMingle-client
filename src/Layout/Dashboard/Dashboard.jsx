import { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../assets/MatchMingle Logo.png";
import logo2 from "../../assets/logo.png";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdContacts, MdFavorite } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import useFavBio from "../../Hooks/useFavBio";
import coupleIcon from "../../assets/icons8-couple-100.png";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [favBio] = useFavBio();
  const [isAdmin] = useAdmin();
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
      className="bg-no-repeat flex"
    >
      <div className="shadow-2xl pt-4 lg:pt-10 md:w-1/12 lg:w-1/5 ">
        <div className="h-full p-3 space-y-2 w-full text-black">
          <div className="divide-y divide-gray-200">
            <Link to="/">
              <div className="hover:scale-110 duration-200 lg:flex items-center justify-center hidden">
                <img src={logo} alt="" className="w-32" />
              </div>
              <div className="flex items-center justify-center lg:hidden">
                <img src={logo2} alt="" className="w-8" />
              </div>
            </Link>
            <ul className="flex flex-col items-center lg:block mt-12 pt-2 pb-4 space-y-4 ml-0 lg:ml-4 text-sm">
              {isAdmin ? (
                <>
                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/adminDashboard"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <FaEye className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Admin Dashboard
                      </span>
                    </NavLink>
                  </li>

                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/manageUsers"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <FaEdit className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Manage Users
                      </span>
                    </NavLink>
                  </li>

                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/approvedPremium"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdContacts className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Approved Premium
                      </span>
                    </NavLink>
                  </li>
                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/approvedContactRequest"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdFavorite className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Approved Contact Request
                      </span>
                    </NavLink>
                  </li>

                  <li className="hover:scale-110 duration-200">
                    <Link
                      onClick={handleLogOut}
                      className="flex items-center font-bold p-2 space-x-3"
                    >
                      <IoIosLogOut className="text-2xl font-bold text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Log out
                      </span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/viewBiodata"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <FaEye className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        View Biodata
                      </span>
                    </NavLink>
                  </li>

                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/editBiodata"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <FaEdit className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Create / Edit Biodata
                      </span>
                    </NavLink>
                  </li>

                  <li className="hover:scale-110 duration-200">
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/myContactReq"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <MdContacts className="text-2xl text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
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
                    <NavLink
                      style={navLinkStyles}
                      to="/dashboard/gotMarried"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <img src={coupleIcon} className="w-7" alt="" />
                      <span className="text-[#956640] hidden lg:block">
                        Got Married
                      </span>
                    </NavLink>
                </li>
                  <li className="hover:scale-110 duration-200">
                    <Link
                      onClick={handleLogOut}
                      className="flex items-center font-bold p-2 space-x-3"
                    >
                      <IoIosLogOut className="text-2xl font-bold text-[#956640]" />
                      <span className="text-[#956640] hidden lg:block">
                        Log out
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="hidden lg:flex items-center p-2">
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-[#956631]"
              />
              <div>
                <div className="border-2 -ml-3 border-l-0 border-[#956631] rounded-r-md">
                  <h2 className=" ml-6 py-2 pr-10 lg:block text-lg text-[#956640] font-semibold">
                    {user?.displayName}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

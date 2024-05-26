/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/MatchMingle Logo.png";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { createUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    // console.log(name, email, password, photoURL);
    createUser(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
      updateUserProfile(name, photoURL)
        .then(() => {
          const userInfo = {
            name: name,
            email: form.email.value,
            photoURL: form.photoURL.value,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Successfully Signed Up",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

          navigate("/");
        })
        .catch((error) => {
          // console.log(error);
        });
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photoURL: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        // console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <section
      style={{
        minHeight: "100vh",
      }}
      className="bg-transparent"
    >
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <Link
          to="/"
          title="Kutty Home Page"
          className="flex items-center justify-start sm:justify-center scale-100 duration-500 hover:scale-125"
        >
          <img src={logo} alt="" className="w-52" />
        </Link>
        <div className="w-full px-0 pt-5 pb-6 mx-auto mt-4 mb-0 space-y-4 bg-transparent border-0 border-gray-200 rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 md:px-6 sm:mt-8 sm:mb-5">
          <h1 className="mb-5 text-xl font-light text-left text-gray-800 sm:text-center">
            Sign up to our product today for free
          </h1>
          <form onSubmit={handleSignup} className="pb-1 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Name
              </span>
              <input
                className="w-full px-4 py-2 rounded-md border border-[#924719]"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
               Your Photo URL
              </span>
              <input
                className="w-full px-4 py-2 rounded-md border border-[#924719]"
                type="text"
                name="photoURL"
                placeholder="Your Photo URL"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="w-full px-4 py-2 rounded-md border border-[#924719]"
                type="email"
                name="email"
                placeholder="Ex. james@bond.com"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Create a password
              </span>
              <input
                className="w-full px-4 py-2 rounded-md border border-[#924719]"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </label>
            <div className="flex items-center justify-between">
              <input
                type="submit"
                className="w-full btn btn-primary bg-[#924719] hover:bg-[#db9a71]"
                value="Signup"
              />
            </div>
          </form>
          {/* ----------- social button------------- */}

          <button
            onClick={handleGoogleSignIn}
            className="mt-4 flex items-center justify-center w-full btn btn-primary text-black bg-[#ffffff] hover:bg-[#d5b6a2]"
          >
            <FaGoogle className="text-black text-lg mr-4"></FaGoogle>
            Sign Up With Google
          </button>

          {/* ----------- social button------------- */}
        </div>
        <p className="my-0 text-xs font-medium text-center text-gray-700 sm:my-5">
          Already have an account?
          <Link
            to="/login"
            className="text-[#924719] font-bold hover:text-black"
          >
            Sign in
          </Link>
        </p>
      </div>
      <Helmet>
        <title>MatchMingle | Signup</title>
      </Helmet>
    </section>
  );
};

export default Signup;

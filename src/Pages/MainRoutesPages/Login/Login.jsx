import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/MatchMingle Logo.png";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const Login = () => {
  const axiosPublic = useAxiosPublic()
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Successfully Logged In",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };


  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photoURL: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Successfully Logged In",
          showConfirmButton: false,
          timer: 1500,
        });
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <section
      className="bg-cover bg-center flex justify-center items-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="px-4 py-20 max-w-md w-full bg-transparent rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <a
            href="/"
            title="Kutty Home Page"
            className="flex items-center justify-start scale-100 duration-500 hover:scale-125"
          >
            <img src={logo} alt="Logo" className="w-52 " />
          </a>
          <h1 className="mt-6 mb-4 text-xl font-light text-left text-gray-800">
            Log in to your account
          </h1>
        </div>
        <form onSubmit={handleLogin} className="pb-1 space-y-4">
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Your Email
            </span>
            <input
              className="w-full px-4 py-2 rounded-md border border-[#924719]"
              type="email"
              name="email"
              placeholder="Ex. james@bond.com"
              inputMode="email"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Your Password
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
              value="Login"
            />
          </div>
        </form>
        {/* ----------- social button------------- */}

        <button onClick={handleGoogleSignIn} className="mt-4 flex items-center justify-center w-full btn btn-primary text-black bg-[#ffffff] hover:bg-[#d5b6a2]">
          <FaGoogle className="text-black text-lg mr-4"></FaGoogle>
          Log In With Google
        </button>

        {/* ----------- social button------------- */}
        <div className="my-6 space-y-2">
          <p className="text-xs text-gray-600">
            Do not have an account?
            <Link
              to="/signup"
              className="text-[#924719] font-bold hover:text-black"
            >
              Create an account
            </Link>
          </p>
          <a href="#" className="block text-xs text-[#924719] hover:text-black">
            Forgot password?
          </a>
        </div>
      </div>
      <Helmet>
        <title>MatchMingle | Login</title>
      </Helmet>
    </section>
  );
};

export default Login;

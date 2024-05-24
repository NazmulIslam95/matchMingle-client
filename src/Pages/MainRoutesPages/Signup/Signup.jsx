import { Link } from "react-router-dom";
import logo from "../../../assets/MatchMingle Logo.png";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
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
          <form className="pb-1 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Name
              </span>
              <input
                className="w-full px-4 py-2 rounded-md border border-[#924719]"
                type="text"
                placeholder="Your full name"
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

          <button className="mt-4 flex items-center justify-center w-full btn btn-primary text-black bg-[#ffffff] hover:bg-[#d5b6a2]">
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
    </section>
  );
};

export default Signup;

import { Link } from "react-router-dom";
import logo from "../../../assets/MatchMingle Logo.png";

const Login = () => {
  return (
    <section
      className="bg-cover bg-center flex justify-center items-center"
      style={{ 
        minHeight: '100vh'
      }}
    >
      <div className="px-4 py-20 max-w-md w-full bg-transparent rounded-lg">
        <div className="flex flex-col items-center justify-center">
        <a
          href="/"
          title="Kutty Home Page"
          className="flex items-center justify-start"
        >
          <img src={logo} alt="Logo" className="w-52" />
        </a>
        <h1 className="mt-6 mb-4 text-xl font-light text-left text-gray-800">
          Log in to your account
        </h1>
        </div>
        <form className="pb-1 space-y-4">
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Your Email
            </span>
            <input
              className="w-full px-4 py-2 rounded-md border border-[#924719]"
              type="email"
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
              placeholder="••••••••"
              required
            />
          </label>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox  border-[#924719] active:bg-[#924719] checked:bg-[#924719]"
              />
              <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                Remember me
              </span>
            </label>
            <input
              type="submit"
              className="btn btn-primary bg-[#924719]"
              value="Login"
            />
          </div>
        </form>
        <div className="my-6 space-y-2">
          <p className="text-xs text-gray-600">
            Do not have an account?
            <Link to="/signup" className="text-[#924719] font-bold hover:text-black">
              Create an account
            </Link>
          </p>
          <a
            href="#"
            className="block text-xs text-[#924719] hover:text-black"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;

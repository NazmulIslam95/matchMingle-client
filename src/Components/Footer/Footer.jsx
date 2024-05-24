import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/MatchMingle Logo.png";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-10">
      <footer className="">
        <div className="max-w-7xl container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#">
              <img className="w-32 hover:scale-125 duration-500" src={logo} alt="" />
            </a>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
              <a
                href="#"
                className="mx-4 text-base font-semibold text-gray-600 transition-colors duration-300 hover:text-[#924719]"
                aria-label="Reddit"
              >
                Home
              </a>

              <a
                href="#"
                className="mx-4 text-base font-semibold text-gray-600 transition-colors duration-300 hover:text-[#924719]"
                aria-label="Reddit"
              >
                About
              </a>

              <a
                href="#"
                className="mx-4 text-base font-semibold text-gray-600 transition-colors duration-300 hover:text-[#924719]"
                aria-label="Reddit"
              >
                Teams
              </a>

              <a
                href="#"
                className="mx-4 text-base font-semibold text-gray-600 transition-colors duration-300 hover:text-[#924719]"
                aria-label="Reddit"
              >
                Privacy
              </a>

              <a
                href="#"
                className="mx-4 text-base font-semibold text-gray-600 transition-colors duration-300 hover:text-[#924719]"
                aria-label="Reddit"
              >
                Cookies
              </a>
            </div>
          </div>

          <hr className="my-6 border-gray-300 md:my-10" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div className="flex -mx-2">
              <a href="#" aria-label="Reddit"></a>
              <Link className="mx-2 text-gray-600 transition-colors duration-300 hover:text-[#924719]">
                <FaFacebook className="text-2xl"></FaFacebook>
              </Link>
              <Link className="mx-2 text-gray-600 transition-colors duration-300 hover:text-[#924719]">
                <FaLinkedin className="text-2xl"></FaLinkedin>
              </Link>
              <Link className="mx-2 text-gray-600 transition-colors duration-300 hover:text-[#924719]">
                <FaYoutube className="text-2xl"></FaYoutube>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

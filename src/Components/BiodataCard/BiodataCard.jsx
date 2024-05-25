/* eslint-disable react/prop-types */

import { SlUserFemale } from "react-icons/sl";
import { LiaMaleSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendar, FaHome } from "react-icons/fa";

const BiodataCard = ({ item }) => {
  const { biodataId, gender, image, name, permanentDivision, age, occupation } =
    item;

  const maleAvatar = "https://i.ibb.co/kh0ZF4p/male-cover.jpg";
  const femaleAvatar =
    "https://i.ibb.co/3h3XRF2/White-and-Gray-Simple-Business-Linked-In-Article-Cover-Image.jpg";

  const getImageSrc = () => {
    if (image) {
      return image;
    } else {
      return gender === "male" ? maleAvatar : femaleAvatar;
    }
  };

  const getGenderIcon = () => {
    if (gender === "male") {
      return <LiaMaleSolid className="text-2xl" />;
    } else {
      return <SlUserFemale className="text-lg" />;
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className=" container p-6  mx-auto">
        <div className="bg-black bg-opacity-10 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={getImageSrc()}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-[#956631] mb-1">
              Biodata ID: {biodataId}
            </h2>
            <h1 className="title-font text-lg font-medium text-[#674620] mb-3">
              {name}
            </h1>
            <div className="flex justify-between">
              <p className="flex items-center leading-relaxed mb-3 text-black font-bold">
                <FaHome className="mr-2 text-[#956631]" />
                <span className="capitalize text-[#956631] font-semibold">
                  {" "}
                  {permanentDivision}
                </span>
              </p>
              <p className="leading-relaxed mb-3 text-b text-[#956631]lack font-bold">
                <span className="capitalize text-[#956631] font-semibold">
                  {" "}
                  {occupation}
                </span>
              </p>
            </div>
            <div className="flex items-center flex-wrap ">
              <Link
                to="/"
                className="text-[#956631] font-bold flex items-center md:mb-2 lg:mb-0 hover:scale-105 duration-200"
              >
                View Profile
                <FaArrowRight className="ml-2" />
              </Link>
              <span className="text-[#956631] mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <FaCalendar className="mr-2" />
                Age {age}
              </span>
              <span className="text-[#956631] inline-flex items-center leading-none text-sm">
                {getGenderIcon()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiodataCard;

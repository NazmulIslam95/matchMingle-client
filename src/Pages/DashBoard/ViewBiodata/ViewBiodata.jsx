import { LiaMaleSolid } from "react-icons/lia";
import { SlUserFemale } from "react-icons/sl";
import loadingGif from "../../../assets/loading-2.gif";

import { useContext, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useRegUser from "../../../Hooks/useRegUser";

const ViewBiodata = () => {
  const [biodata, setBiodata] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [regUsers] = useRegUser();
  console.log(regUsers);

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <img src={loadingGif} alt="" />
        </div>
      </div>
    );
  }

  axiosSecure.get(`/biodataByEmail/${user.email}`).then((response) => {
    const biodata = setBiodata(response.data);
    console.log(biodata);
    // Do something with the biodata
  });

  const {
    // biodataId,
    name,
    gender,
    image,
    permanentDivision,
    age,
    occupation,
    // status,
    // subscription,
    email,
    phone,
    dataOfBirth,
    height,
    weight,
    race,
    fathersName,
    mothersName,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    // createTime,
  } = biodata;

  const maleAvatar = "https://i.ibb.co/kh0ZF4p/male-cover.jpg";
  const femaleAvatar =
    "https://i.ibb.co/3h3XRF2/White-and-Gray-Simple-Business-Linked-In-Article-Cover-Image.jpg";

  const getImageSrc = () => {
    if (image) {
      return image;
    } else {
      return gender === "female" ? femaleAvatar : maleAvatar;
    }
  };

  const getGenderIcon = () => {
    if (gender === "female") {
      return <SlUserFemale className="text-lg" />;
    } else {
      return <LiaMaleSolid className="text-2xl" />;
    }
  };

  return (
    <div>
      <SectionTitle heading="View Biodata Page"></SectionTitle>
      <div className="flex">
        <section className="w-full flex text-gray-600 body-font overflow-hidden">
          <div className="px-6 lg:px-0 py-24 w-full">
            <div className="lg:w-4/5 mx-auto flex flex-col-reverse">
              <div className="lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="uppercase text-gray-900 text-lg lg:text-3xl title-font font-medium ">
                  {name}
                </h1>
                <h2 className="capitalize flex gap-4 items-center text-base title-font text-gray-500 tracking-widest mb-4">
                  {occupation}
                </h2>
                <div className="flex justify-between gap-12">
                  <div className="w-1/2">
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Father Name</span>
                      <span className="ml-auto text-gray-900 capitalize">
                        {fathersName}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Mother Name</span>
                      <span className="ml-auto text-gray-900 capitalize">
                        {mothersName}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Race</span>
                      <span className="ml-auto text-gray-900 capitalize">
                        {race}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Permanent Division</span>
                      <span className="ml-auto text-gray-900 capitalize">
                        {permanentDivision}
                      </span>
                    </div>
                    <div className="flex border-t border-b mb-6 border-gray-300 py-2">
                      <span className="text-gray-500">Present Division</span>
                      <span className="ml-auto text-gray-900 capitalize">
                        {presentDivision}
                      </span>
                    </div>
                    <div>
                      <h1 className="border border-b-violet-700">
                        Contact Info
                      </h1>
                      <div className="border-t border-gray-300 py-2">
                        <p className="text-gray-500">Phone No.</p>
                        <p className="ml-auto font-bold text-gray-900">
                          {phone}
                        </p>
                      </div>
                      <div className="border-t border-gray-300 py-2">
                        <p className="text-gray-500">Email</p>
                        <p className="ml-auto font-bold text-gray-900">
                          {email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Age</span>
                      <span className="ml-auto text-gray-900">{age}</span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Height</span>
                      <span className="ml-auto text-gray-900">{height}</span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Weight</span>
                      <span className="ml-auto text-gray-900">{weight} kg</span>
                    </div>
                    <div className="flex border-t border-b mb-6 border-gray-300 py-2">
                      <span className="text-gray-500">Date Of Birth</span>
                      <span className="ml-auto text-gray-900">
                        {dataOfBirth}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-300 mt-10 py-2">
                      <span className="text-gray-500"> Partner Age</span>
                      <span className="ml-auto text-gray-900">
                        {expectedPartnerAge}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Partner Height</span>
                      <span className="ml-auto text-gray-900">
                        {expectedPartnerHeight}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-300 py-2">
                      <span className="text-gray-500">Partner Weight</span>
                      <span className="ml-auto text-gray-900">
                        {expectedPartnerWeight} kg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="capitalize flex gap-4 items-center title-font font-medium text-2xl text-gray-900">
                    {getGenderIcon()} {gender}
                  </span>
                </div>
              </div>
              <img
                alt="eCommerce"
                className="lg:w-full w-full h-1/4 object-cover object-center rounded"
                src={getImageSrc()}
              />
            </div>
            <div className="max-w-5xl mx-auto">
              <button className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 btn transform bg-[#956640] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Make My Biodata Premium
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViewBiodata;

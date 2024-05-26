import { Helmet } from "react-helmet";
// import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { LiaMaleSolid } from "react-icons/lia";
import { SlUserFemale } from "react-icons/sl";
import BiodataCard from "../../../Components/BiodataCard/BiodataCard";
import useBiodata from "../../../Hooks/useBiodata";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import usePremium from "../../../Hooks/usePremium";

const BiodataDetails = () => {
  const [isPremium] = usePremium();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [biodata] = useBiodata();
  const loadedBiodata = useLoaderData();
  //   console.log(loadedBiodata);
  const {
    biodataId,
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
  } = loadedBiodata;

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

  const handleAddToFav = () => {
    if (user && user.email) {
      //   console.log(loadedBiodata);
      const favBioInfo = {
        name: name,
        biodataId: biodataId,
        permanentDivision: permanentDivision,
        occupation: occupation,
        email: user.email,
      };
      axiosSecure.post("/favoriteBiodatas", favBioInfo).then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} Added To Your Favorite List`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <section className="w-full flex text-gray-600 body-font overflow-hidden">
          <div className="px-6 lg:px-0 py-24 w-full">
            <div className="lg:w-4/5 mx-auto flex flex-col-reverse">
              <div className="lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="uppercase text-gray-900 text-3xl title-font font-medium ">
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
                      <span className="ml-auto text-gray-900">{race}</span>
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
                    {user && isPremium && (
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
                    )}
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
                  {user && !isPremium && (
                    <button className="flex ml-auto text-white bg-[#d9a76f] border-0 py-2 px-6 focus:outline-none duration-300 hover:bg-[#956631] rounded">
                      Request Contact
                    </button>
                  )}
                  <Link>
                    <button
                      onClick={handleAddToFav}
                      className="btn rounded-full w-10 h-10 bg-[#e0cab1] p-0 inline-flex items-center justify-center text-[#956631] duration-300 hover:scale-110 ml-4"
                    >
                      <FaHeart></FaHeart>
                    </button>
                  </Link>
                </div>
              </div>
              <img
                alt="eCommerce"
                className="lg:w-full w-full h-1/4 object-cover object-center rounded"
                src={getImageSrc()}
              />
            </div>
          </div>
          <div className="hidden lg:block mt-24 w-2/5">
            <h1 className="ml-6 text-[#956631] text-3xl title-font font-medium font-serif uppercase">
              Similar Biodata
            </h1>
            <div>
              {biodata
                .filter((item) => item.gender === loadedBiodata.gender)
                .map((filteredBiodata) => (
                  <BiodataCard
                    key={filteredBiodata._id}
                    item={filteredBiodata}
                  ></BiodataCard>
                ))}
            </div>
          </div>
        </section>
      </div>
      <Helmet>
        <title>MatchMingle | Biodata Details</title>
      </Helmet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default BiodataDetails;

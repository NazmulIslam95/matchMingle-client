import { useState } from "react";
import { Helmet } from "react-helmet";
import Banner from "../../../Components/Banner/Banner";
import BiodataCard from "../../../Components/BiodataCard/BiodataCard";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useBiodata from "../../../Hooks/useBiodata";

const Biodatas = () => {
  const [biodata] = useBiodata();

  // State for filters
  const [ageRange, setAgeRange] = useState([18, 60]);
  const [gender, setGender] = useState("");
  const [permanentDivision, setPermanentDivision] = useState("");

  const filteredBiodata = biodata
    .filter((item) => item.age >= ageRange[0] && item.age <= ageRange[1])
    .filter((item) => (gender ? item.gender === gender : true))
    .filter((item) =>
      permanentDivision ? item.permanentDivision === permanentDivision : true
    )
    .sort((a, b) => a.age - b.age);

  return (
    <div>
      <Navbar />
      <Banner />
      <SectionTitle heading={"all biodatas"} />
      <div className="md:flex">
        <div className="lg:w-1/5 p-4 space-y-5">
          <h3 className="text-center text-xl font-semibold">Filters</h3>
          <div>
            <label className="text-lg font-semibold">Age Range:</label>
            <div className="flex gap-4">
              <input
                type="range"
                className="w-1/2"
                onChange={(e) => setAgeRange([+e.target.value, ageRange[1]])}
              />
              <input
                type="range"
                className="w-1/2"
                onChange={(e) => setAgeRange([ageRange[0], +e.target.value])}
              />
            </div>
            <div>
              {ageRange[0]} - {ageRange[1]}
            </div>
          </div>
          <div className="flex items-center lg:block space-y-4">
            <div>
              <label className="text-lg font-semibold mr-2">Gender:</label>
              <select
                value={gender}
                className="px-4 py-2 rounded-md"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="text-lg font-semibold mr-2">Division:</label>
              <select
                value={permanentDivision}
                className="px-4 py-2 rounded-md"
                onChange={(e) => setPermanentDivision(e.target.value)}
              >
                <option value="">All</option>
                <option value="dhaka">Dhaka</option>
                <option value="chattogram">Chattagram</option>
                <option value="rangpur">Rangpur</option>
                <option value="barishal">Barishal</option>
                <option value="khulna">Khulna</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="sylhet">Sylhet</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBiodata.map((singleBiodata) => (
            <BiodataCard key={singleBiodata._id} item={singleBiodata} />
          ))}
        </div>
      </div>
      <Footer />
      <Helmet>
        <title>MatchMingle | Biodatas</title>
      </Helmet>
    </div>
  );
};

export default Biodatas;

import { Helmet } from "react-helmet";
import Banner from "../../../Components/Banner/Banner";
import BiodataCard from "../../../Components/BiodataCard/BiodataCard";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useBiodata from "../../../Hooks/useBiodata";

const Biodatas = () => {
  const [biodata] = useBiodata();

  const biodatas = biodata.sort((a, b) => a.age - b.age);
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <SectionTitle heading={"all biodatas"}></SectionTitle>
      <div className="md:flex">
        <div className="w-1/5 border-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {biodatas.map((singleBiodata) => (
            <BiodataCard
              key={singleBiodata._id}
              item={singleBiodata}
            ></BiodataCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
      <Helmet>
        <title>MatchMingle | Biodatas</title>
      </Helmet>
    </div>
  );
};

export default Biodatas;

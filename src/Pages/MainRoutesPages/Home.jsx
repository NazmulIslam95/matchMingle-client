import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import TopPremiumBiodata from "../../Components/TopPremiumBiodata/TopPremiumBiodata";

const Home = () => {
  
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <TopPremiumBiodata></TopPremiumBiodata>
      <Footer></Footer>
      <div></div>
      <Helmet>
        <title>MatchMingle | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;

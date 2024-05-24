import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import TopPremiumBiodata from "../../Components/TopPremiumBiodata/TopPremiumBiodata";
import HowSiteWork from "../../Components/HowSiteWork/HowSiteWork";
import Statistics from "../../Components/Statistics/Statistics";

const Home = () => {
  
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <TopPremiumBiodata></TopPremiumBiodata>
      <HowSiteWork></HowSiteWork>
      <Statistics></Statistics>
      <Footer></Footer>
      <div></div>
      <Helmet>
        <title>MatchMingle | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;

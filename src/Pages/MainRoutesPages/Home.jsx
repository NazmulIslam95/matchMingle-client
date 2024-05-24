import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
      <Helmet>
        <title>MatchMingle | Home</title>
      </Helmet>
    </div>
  );
};

export default Home;

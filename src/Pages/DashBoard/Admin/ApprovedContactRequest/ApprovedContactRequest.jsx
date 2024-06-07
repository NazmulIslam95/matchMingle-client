import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const ApprovedContactRequest = () => {
  return (
    <div>
      <SectionTitle heading={"Approved Contact Request"}></SectionTitle>
      <Helmet><title>MatchMingle | Dashboard | Contact Req</title></Helmet>
    </div>
  );
};

export default ApprovedContactRequest;

import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";


const ApprovedPremium = () => {
    return (
        <div>
            <SectionTitle heading={"Approve Premium"}></SectionTitle>
            <Helmet><title>MatchMingle | Dashboard | Premium Req</title></Helmet>
        </div>
    );
};

export default ApprovedPremium;
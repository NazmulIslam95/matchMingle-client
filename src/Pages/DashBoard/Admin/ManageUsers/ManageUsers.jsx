import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const ManageUsers = () => {
  return (
    <div>
      <SectionTitle heading={"Manage All Users"}></SectionTitle>
      <Helmet>
        <title>MatchMingle | Dashboard |Manage Users</title>
      </Helmet>
    </div>
  );
};

export default ManageUsers;

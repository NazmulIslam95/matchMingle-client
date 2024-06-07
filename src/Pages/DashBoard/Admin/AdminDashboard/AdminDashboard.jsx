import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useBiodata from "../../../../Hooks/useBiodata";

const AdminDashboard = () => {
  const [biodata] = useBiodata();
  const maleBiodata = biodata.filter((item) => item.gender === "male");
  const femaleBiodata = biodata.filter((item) => item.gender === "female");
  const marriedBiodata = biodata.filter((item) => item.status === "married");

  return (
    <div>
      <SectionTitle heading={"Admin Dashboard"}></SectionTitle>
      <section className="">
        <section className="mt-32 text-gray-600 max-w-7xl mx-auto">
          <div className="flex px-4 gap-4">
            <div className="p-4 bg-white w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {biodata.length}
              </h2>
              <p className="leading-relaxed text-center">Total Biodata</p>
            </div>

            <div className="p-4 bg-white w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {maleBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Male Biodata</p>
            </div>

            <div className="p-4 bg-white w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {femaleBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Female Biodata</p>
            </div>

            <div className="p-4 bg-white w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {marriedBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Got Married</p>
            </div>

            <div className="p-4 bg-white w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {marriedBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Premium Biodata</p>
            </div>
          </div>
        </section>
      </section>
      <Helmet>
        <title>MatchMingle | Dashboard | Admin Dashboard</title>
      </Helmet>
    </div>
  );
};

export default AdminDashboard;

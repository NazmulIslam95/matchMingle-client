import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const ApprovedPremium = () => {
  return (
    <div>
      <SectionTitle heading={"Approve Premium"}></SectionTitle>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead className="text-center">
                <tr>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631] rounded-tl-lg ">
                    SN
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Name
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Email
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Biodata ID
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631] rounded-tr-lg">
                    Action
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {regUsers.map((regUser, index) => (
                  <tr className="text-base font-bold" key={regUser._id}>
                    <td className="px-4 py-3">({index + 1})</td>
                    <td className="px-4 py-3">
                      <img
                        src={regUser.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-3">{regUser.name}</td>
                    
                    <td className="px-4 py-3 capitalize">
                      {regUser.role === "admin" ? (
                        <button className=" w-full flex items-center justify-center gap-2 border border-gray-600 px-4 py-2 rounded-lg">
                          <MdOutlineAdminPanelSettings className=" cursor-pointer duration-300 text-green-700 text-2xl font-bold" />
                          Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAdmin({ regUser })}
                          className="hover:scale-110 duration-200 w-full flex items-center justify-center gap-2 border border-gray-600 px-4 py-2 rounded-lg"
                        >
                          <MdOutlineAdminPanelSettings className=" cursor-pointer duration-300 text-red-700 text-2xl font-bold" />
                          User
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody> */}
            </table>
          </div>
        </div>
      </section>
      <Helmet>
        <title>MatchMingle | Dashboard | Premium Req</title>
      </Helmet>
    </div>
  );
};

export default ApprovedPremium;

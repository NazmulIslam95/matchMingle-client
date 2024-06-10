import { Helmet } from "react-helmet";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useRegUser from "../../../../Hooks/useRegUser";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import loadingGif from "../../../../assets/loading-2.gif";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const [regUsers, loading, refetch] = useRegUser();
  const axiosSecure = useAxiosSecure();
  // console.log(regUsers);

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <img src={loadingGif} alt="" />
        </div>
      </div>
    );
  }

  const handleAdmin = ({ regUser }) => {
    // console.log(regUser);
    Swal.fire({
      title: "Are you sure?",
      text: "Wanna Make Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Him!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${regUser._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Promoted!",
              text: `${regUser.name} Is An Admin Now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePremium = ({ regUser }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Wanna Make Premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Him!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/premium/${regUser._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Promoted!",
              text: `${regUser.name} Is Premium Now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Users"}></SectionTitle>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead className="text-center">
                <tr>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631] rounded-tl-lg  ">
                    SN
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Image
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    User Name
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    User Email
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Role
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631] rounded-tr-lg ">
                    Subscription
                  </th>
                </tr>
              </thead>
              <tbody>
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
                    <td className="px-4 py-3">{regUser.email}</td>
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

                    <td className="px-4 py-3 text-center">
                      {regUser.subscription === "premium" ? (
                        <button className=" w-full flex items-center justify-center gap-2 border border-gray-600 px-4 py-2 rounded-lg">
                          <MdOutlineWorkspacePremium className=" cursor-pointer duration-300 text-green-700 text-2xl font-bold"></MdOutlineWorkspacePremium>
                          Premium
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            handlePremium({ regUser });
                          }}
                          className="hover:scale-110 duration-200 w-full flex items-center justify-center gap-2 border border-gray-600 px-4 py-2 rounded-lg"
                        >
                          <MdOutlineWorkspacePremium className=" cursor-pointer duration-300 text-red-700 text-2xl font-bold"></MdOutlineWorkspacePremium>
                          Basic
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Helmet>
        <title>MatchMingle | Dashboard |Manage Users</title>
      </Helmet>
    </div>
  );
};

export default ManageUsers;

import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useFavBio from "../../../Hooks/useFavBio";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyFavoriteBiodatasPage = () => {
  const [favBio, refetch] = useFavBio();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/favoriteBiodatas/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle heading="My Favorite Biodatas"></SectionTitle>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631] rounded-tl-md ">
                    SN
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Name
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Bio. ID
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Permanent Add.
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631]">
                    Occupation
                  </th>
                  <th className="px-4 text-white py-3 title-font tracking-wider font-medium text-sm bg-[#956631] rounded-tr">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {favBio.map((item, index) => (
                  <tr key={item._id}>
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3">{item.biodataId}</td>
                    <td className="px-4 py-3 text-lg capitalize">
                      {item.permanentDivision}
                    </td>
                    <td className="px-4 py-3 text-lg capitalize">
                      {item.occupation}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FaTrash
                        className="text-red-700"
                        onClick={() => {
                          handleDelete(item._id);
                        }}
                      ></FaTrash>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyFavoriteBiodatasPage;

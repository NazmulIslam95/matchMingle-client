import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import loadingGif from "../../../assets/loading-2.gif";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditBiodata = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [data, setData] = useState("");

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <img src={loadingGif} alt="" />
        </div>
      </div>
    );
  }

  const onSubmit = async (data) => {
    console.log("from data", data);
    const biodataInfo = {
      name: data.name,
      fathersName: data.fathersName,
      mothersName: data.mothersName,
      gender: data.gender,
      age: data.age,
      occupation: data.occupation,
      height: data.height,
      weight: data.weight,
      race: data.race,
      dataOfBirth: data.dateOfBirth,
      image: data.image,
      permanentDivision: data.permanentDivision,
      presentDivision: data.presentDivision,
      expectedPartnerAge: data.expectedPartnerAge,
      expectedPartnerHeight: data.expectedPartnerHeight,
      expectedPartnerWeight: data.expectedPartnerWeight,
      email: data.email,
      phone: data.phone,
    };
    console.log("from submit", biodataInfo);
    const biodataRes = await axiosSecure.post("/biodatas", biodataInfo);
    console.log(biodataRes);
    if (biodataRes.data.insertedId) {
      // refetch();
      Swal.fire({
        title: "Great!",
        text: "Your Biodata Successfully Added",
        icon: "success",
      });
    } else if (biodataRes.data.insertedId === null) {
      Swal.fire({
        title: "Opss!",
        text: "Your Biodata Already In Our Database",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <SectionTitle heading={"Edit Biodata Page"}></SectionTitle>
      <section className="max-w-4xl my-32 bg-black bg-opacity-5 p-6 mx-auto  rounded-md shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="username">
                Your Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Your name"
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Father&apos;s Name</label>
              <input
                {...register("fathersName", { required: true })}
                placeholder="Your Father's Name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.fathersName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Mother&apos;s Name</label>
              <input
                {...register("mothersName", { required: true })}
                placeholder="Your Mother's Name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.mothersName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Your Age</label>
              <input
                {...register("age", { required: true })}
                placeholder="Your Age"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.age && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Gender</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("gender", { required: true })}
              >
                <option value="">What&apos;s Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700" htmlFor="password">
                Your Image URL
              </label>
              <input
                {...register("image")}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.image && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700" htmlFor="passwordConfirmation">
                Your Date Of Birth
              </label>
              <input
                {...register("dateOfBirth", { required: true })}
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.dataOfBirth && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">How Tall Are You?</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("height", { required: true })}
              >
                <option value="">Select your height</option>
                <option value="4'6&quot;">4 feet 6 inches</option>
                <option value="4'8&quot;">4 feet 8 inches</option>
                <option value="4'10&quot;">4 feet 10 inches</option>
                <option value="5'0&quot;">5 feet 0 inches</option>
                <option value="5'2&quot;">5 feet 2 inches</option>
                <option value="5'4&quot;">5 feet 4 inches</option>
                <option value="5'6&quot;">5 feet 6 inches</option>
                <option value="5'8&quot;">5 feet 8 inches</option>
                <option value="5'10&quot;">5 feet 10 inches</option>
                <option value="6'0&quot;">6 feet 0 inches</option>
              </select>
              {errors.height && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">How much do you weigh?</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("weight", { required: true })}
              >
                <option value="">Select your weight</option>
                <option value="40">40 kg</option>
                <option value="45">45 kg</option>
                <option value="50">50 kg</option>
                <option value="55">55 kg</option>
                <option value="60">60 kg</option>
                <option value="65">65 kg</option>
                <option value="70">70 kg</option>
                <option value="75">75 kg</option>
                <option value="80">80 kg</option>
                <option value="85">85 kg</option>
              </select>
              {errors.weight && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">What is your occupation?</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("occupation", { required: true })}
              >
                <option value="">Select your occupation</option>
                <option value="doctor">Doctor</option>
                <option value="engineer">Engineer</option>
                <option value="teacher">Teacher</option>
                <option value="nurse">Nurse</option>
                <option value="lawyer">Lawyer</option>
                <option value="accountant">Accountant</option>
                <option value="software_developer">Software Developer</option>
                <option value="manager">Manager</option>
                <option value="artist">Artist</option>
                <option value="chef">Chef</option>
              </select>
              {errors.occupation && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">What is your ethnicity?</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("race", { required: true })}
              >
                <option value="">Select your ethnicity</option>
                <option value="bengali">Bengali</option>
                <option value="chakma">Chakma</option>
                <option value="marma">Marma</option>
                <option value="santal">Santal</option>
                <option value="mro">Mro</option>
                <option value="garo">Garo</option>
                <option value="bawm">Bawm</option>
                <option value="tripuri">Tripuri</option>
                <option value="rakhine">Rakhine</option>
                <option value="khasi">Khasi</option>
              </select>
              {errors.race && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">
                Select Your Permanent Division
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("permanentDivision", { required: true })}
              >
                <option value="">Select Your Permanent Division</option>
                <option value="barisal">Barisal</option>
                <option value="chittagong">Chittagong</option>
                <option value="dhaka">Dhaka</option>
                <option value="khulna">Khulna</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="rangpur">Rangpur</option>
                <option value="sylhet">Sylhet</option>
              </select>
              {errors.permanentDivision && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">
                Select your Present division
              </label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("presentDivision", { required: true })}
              >
                <option value="">Select Your Present Division</option>
                <option value="barisal">Barisal</option>
                <option value="chittagong">Chittagong</option>
                <option value="dhaka">Dhaka</option>
                <option value="khulna">Khulna</option>
                <option value="mymensingh">Mymensingh</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="rangpur">Rangpur</option>
                <option value="sylhet">Sylhet</option>
              </select>
              {errors.presentDivision && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Expected Partner Age</label>
              <input
                {...register("expectedPartnerAge", { required: true })}
                placeholder="Expected Partner Age"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.expectedPartnerAge && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Expected Partner Height</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("expectedPartnerHeight", { required: true })}
              >
                <option value="">Select Expected Partner Height</option>
                <option value="4'6&quot;">4 feet 6 inches</option>
                <option value="4'8&quot;">4 feet 8 inches</option>
                <option value="4'10&quot;">4 feet 10 inches</option>
                <option value="5'0&quot;">5 feet 0 inches</option>
                <option value="5'2&quot;">5 feet 2 inches</option>
                <option value="5'4&quot;">5 feet 4 inches</option>
                <option value="5'6&quot;">5 feet 6 inches</option>
                <option value="5'8&quot;">5 feet 8 inches</option>
                <option value="5'10&quot;">5 feet 10 inches</option>
                <option value="6'0&quot;">6 feet 0 inches</option>
              </select>
              {errors.expectedPartnerHeight && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Expected Partner Weight</label>
              <select
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("expectedPartnerWeight", { required: true })}
              >
                <option value="">Select Expected Partner Weight</option>
                <option value="40">40 kg</option>
                <option value="45">45 kg</option>
                <option value="50">50 kg</option>
                <option value="55">55 kg</option>
                <option value="60">60 kg</option>
                <option value="65">65 kg</option>
                <option value="70">70 kg</option>
                <option value="75">75 kg</option>
                <option value="80">80 kg</option>
                <option value="85">85 kg</option>
              </select>
              {errors.expectedPartnerWeight && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700" htmlFor="emailAddress">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                value={user.email}
                id="emailAddress"
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700">Your Mobile NO.</label>
              <input
                {...register("phone", { required: true })}
                placeholder="Your Mobile NO."
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-[#956640] focus:ring-[#956640] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
              {errors.phone && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <div className="flex mt-6">
            <button className="px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform bg-[#956640] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Publish My Biodata
            </button>
          </div>
        </form>
      </section>
      <Helmet>
        <title>Dashboard | Edit Biodata</title>
      </Helmet>
    </div>
  );
};

export default EditBiodata;

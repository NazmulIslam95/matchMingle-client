import useBiodata from "../../Hooks/useBiodata";
// import img from "../../assets/1.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";

const Statistics = () => {
  const [biodata] = useBiodata();
  const maleBiodata = biodata.filter((item) => item.gender === "male");
  const femaleBiodata = biodata.filter((item) => item.gender === "female");
  const marriedBiodata = biodata.filter((item) => item.status === "married");

  return (
    <div>
      <SectionTitle heading={"Our Statistics"}></SectionTitle>
      <section className="text-gray-600 body-font max-w-7xl mx-auto">
        <div className="items-center px-5 py-24 mx-auto w-full ">
          <div className=" mt-auto mb-auto w-full content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                Crafting love stories with care.
              </h1>
              <div className="leading-relaxed">
                Find your soulmate in a trusted community built on shared values
                and lasting connections.
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex flex-row items-center p-5 card bg-black bg-opacity-10 text-center">
                <div className="flex items-center justify-center w-10 h-10 text-pink-700 bg-pink-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
                    {biodata.length}
                  </h2>
                  <p className="text-sm leading-none text-gray-600">
                    Total Biodata Count
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center p-5 card bg-black bg-opacity-10 text-center">
                <div className="flex items-center justify-center w-10 h-10 text-green-700 bg-green-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
                    {maleBiodata.length}
                  </h2>
                  <p className="text-sm leading-none text-gray-600">
                    Male Biodata
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center p-5 card bg-black bg-opacity-10 text-center">
                <div className="flex items-center justify-center w-10 h-10 text-red-700 bg-red-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
                    {femaleBiodata.length}
                  </h2>
                  <p className="text-sm leading-none text-gray-600">
                    Female Biodata
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center p-5 card bg-black bg-opacity-10 text-center">
                <div className="flex items-center justify-center w-10 h-10 text-yellow-700 bg-yellow-100 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-none w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h2 className="mb-1 text-lg font-bold leading-none text-gray-900 truncate">
                    {marriedBiodata.length}
                  </h2>
                  <p className="text-sm leading-none text-gray-600">
                    Premium Biodata
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;

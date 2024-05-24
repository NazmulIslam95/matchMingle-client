import useBiodata from "../../Hooks/useBiodata";
import img from "../../assets/1.jpg";
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
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                Crafting love stories with care.
              </h1>
              <div className="leading-relaxed">
                Find your soulmate in a trusted community built on shared values
                and lasting connections.
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {biodata.length}
              </h2>
              <p className="leading-relaxed text-center">Total Biodata</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {maleBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Male Biodata</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {femaleBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Female Biodata</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font text-center font-medium text-3xl text-gray-900">
                {marriedBiodata.length}
              </h2>
              <p className="leading-relaxed text-center">Got Married</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 shadow-lg">
            <img
              className="object-cover object-center w-full h-full"
              src={img}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;

/* eslint-disable react/prop-types */
const SectionTitle = ({ heading }) => {
  return (
    <div className="w-4/12 md:w-3/12 lg:w-3/12  mx-auto text-center my-4 lg:mt-8 -mb-24">
      {/* <p className=" text-xs lg:text-xl font-normal lg:font-normal"></p> */}
      <h1 className=" text-[#957937] border-[#D99904] border-y-2 lg:border-y-4 py-2 text-base lg:text-4xl font-normal uppercase mt-2 lg:mt-4 mb-4 lg:mb-8">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;

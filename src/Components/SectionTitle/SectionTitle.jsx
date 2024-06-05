/* eslint-disable react/prop-types */
const SectionTitle = ({ heading }) => {
  return (
    <div className="w-full mx-auto text-center my-4 lg:mt-8 -mb-24">
      {/* <p className=" text-xs lg:text-xl font-normal lg:font-normal"></p> */}
      <h1 className=" text-[#957937] font-serif py-2 text-base lg:text-4xl font-normal uppercase mt-2 lg:mt-4 mb-4 lg:mb-8">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;

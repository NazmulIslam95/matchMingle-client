import useBiodata from "../../Hooks/useBiodata";
import BiodataCard from "../BiodataCard/BiodataCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const TopPremiumBiodata = () => {
  const [biodata] = useBiodata();

  const sortedBiodata = biodata.sort(
    (a, b) => new Date(a.createTime) - new Date(b.createTime)
  );

  const topPremium6 = sortedBiodata
    .filter((item) => item.subscription === "premium")
    .slice(0, 6)
    .sort((a, b) => a.age - b.age);

  //   console.log(topPremium6);
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle heading="Top Premium"></SectionTitle>
      <div className="grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-3 ">
        {topPremium6.map((topPremium) => (
          <BiodataCard key={topPremium._id} item={topPremium}></BiodataCard>
        ))}
      </div>
    </div>
  );
};

export default TopPremiumBiodata;

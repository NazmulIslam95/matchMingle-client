import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/k2Tsg85/bg.jpg')`,
        minHeight: "100vh",
      }}
      className="bg-no-repeat bg-cover"
    >
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

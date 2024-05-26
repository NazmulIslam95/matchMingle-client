import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/MainRoutesPages/Home/Home";
import Login from "../Pages/MainRoutesPages/Login/Login";
import Signup from "../Pages/MainRoutesPages/Signup/Signup";
import Biodatas from "../Pages/MainRoutesPages/Biodatas/Biodatas";
import BiodataDetails from "../Pages/MainRoutesPages/BiodataDetails/BiodataDetails";
import PrivateRoutes from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import EditBiodata from "../Pages/DashBoard/EditBiodata/EditBiodata";
import MyFavoriteBiodatasPage from "../Pages/DashBoard/MyFavoriteBiodatasPage/MyFavoriteBiodatasPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "biodatas/:id",
        element: (
          <PrivateRoutes>
            <BiodataDetails></BiodataDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://match-mingle-server-eta.vercel.app/biodatas/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "editBiodata",
        element: <EditBiodata></EditBiodata>,
      },
      {
        path: "favoritesBiodata",
        element: <MyFavoriteBiodatasPage></MyFavoriteBiodatasPage>,
      },
    ],
  },
]);

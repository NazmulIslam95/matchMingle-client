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
import ViewBiodata from "../Pages/DashBoard/ViewBiodata/ViewBiodata";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../Pages/DashBoard/Admin/ManageUsers/ManageUsers";
import AdminDashboard from "../Pages/DashBoard/Admin/AdminDashboard/AdminDashboard";
import ApprovedPremium from "../Pages/DashBoard/Admin/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../Pages/DashBoard/Admin/ApprovedContactRequest/ApprovedContactRequest";
import MyContactReq from "../Pages/DashBoard/MyContactReq/MyContactReq";

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
          fetch(`https://match-mingle-server-eta.vercel.app/biodata/${params.id}`),
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
      {
        path: "viewBiodata",
        element: <ViewBiodata></ViewBiodata>,
        //   loader: ({ params }) =>
        //     fetch(`https://match-mingle-server-eta.vercel.app/biodatas/${params.email}`),
      },
      {
        path: "myContactReq",
        element: <MyContactReq></MyContactReq>,
      },
      //------------------------------ Admin Routes -------------------------------//
      {
        path: "adminDashboard",
        element: (
          <AdminRoutes>
            <AdminDashboard></AdminDashboard>
          </AdminRoutes>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "approvedPremium",
        element: (
          <AdminRoutes>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoutes>
        ),
      },
      {
        path: "approvedContactRequest",
        element: (
          <AdminRoutes>
            <ApprovedContactRequest></ApprovedContactRequest>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

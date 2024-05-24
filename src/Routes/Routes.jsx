import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/MainRoutesPages/Home";
import Login from "../Pages/MainRoutesPages/Login/Login";
import Signup from "../Pages/MainRoutesPages/Signup/Signup";
import Biodatas from "../Pages/MainRoutesPages/Biodatas/Biodatas";

export const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);

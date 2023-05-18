import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Login from "../Components/Pages/Authentication/Login";
import Register from "../Components/Pages/Authentication/Register";
import AddToy from "../Components/Pages/AddToy/AddToy";
import AllToys from "../Components/Pages/AllToys/AllToys";
import Blog from "../Components/Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "add-toy",
        element: <AddToy></AddToy>,
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: ()=> fetch("http://localhost:5000/all-toys")
      },
      {
        path: "blog",
        element:<Blog></Blog>
      }
    ],
  },
]);

export default router;

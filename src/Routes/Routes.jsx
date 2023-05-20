import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Components/Pages/Home/Home";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Login from "../Components/Pages/Authentication/Login";
import Register from "../Components/Pages/Authentication/Register";
import AddToy from "../Components/Pages/AddToy/AddToy";
import AllToys from "../Components/Pages/AllToys/AllToys";
import Blog from "../Components/Pages/Blog/Blog";
import ToyDetails from "../Components/Pages/ToyDetails/ToyDetails";
import MyToys from "../Components/Pages/MyToys/MyToys";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import UpdateToy from "../Components/Pages/MyToys/UpdateToy";

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
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "toy/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://auto-playland-server.vercel.app/all-toys/${params.id}`
          ),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "update-toy/:id",
        element: <UpdateToy></UpdateToy>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllJobs from "../Pages/Alljobs";
import MyApplication from "../Pages/MyApplication";
import JobDetails from "../Pages/JobDetails";
import ApplyForm from "../Pages/ApplyForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/myApplication",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/job-details/${params.id}`),
      },
      {
        path: "/applyForm/:id",
        element: <ApplyForm></ApplyForm>
      }
    ],
  },
]);

export default router;
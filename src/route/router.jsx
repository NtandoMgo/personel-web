import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Service from "../pages/service";
import SingleProject from "../pages/single-project";
import Works from "../pages/works";
import UASingleProject from "../pages/uas-single-project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      // {
      //     path: "/single-project",
      //     element: <SingleProject />
      // },
      {
        path: "/projects/1",
        element: <SingleProject />,
      },
      {
        path: "/projects/2",
        element: <UASingleProject/>
      },
      {
        path: "/works",
        element: <Works />,
      },
    ],
  },
]);

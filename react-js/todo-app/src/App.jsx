import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Team from "./components/pages/Team";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import ProtectedRouting from "./components/admin/ProtectedRouting";
import Dashboard from "./components/admin/DashBoard";
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/team",
          element: <Team />,
        },
      ],
    },
    {
      path: "/admin",
      element: <ProtectedRouting />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "users",
          element: <UserList />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
      // element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;

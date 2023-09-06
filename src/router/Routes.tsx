import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Login />} />

      <Route element={<ProtectedLayout />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

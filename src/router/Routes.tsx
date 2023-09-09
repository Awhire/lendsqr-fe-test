import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


// pages
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import User from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import GeneralDetails from "../pages/GeneralDetails";

//layouts
import RootLayout from "../layouts/RootLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import NestedLayout from "../layouts/NestedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />

      {/* Proteted layout for login routes */}
      <Route element={<ProtectedLayout />}>
        {/* dashboard layout for views with sidebar and topbar */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="user" element={<NestedLayout />}>
            {/*  nested routers of user,  every route here will route /user/*   */}
            <Route index element={<User />} />
            <Route path="details" element={<UserDetails />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

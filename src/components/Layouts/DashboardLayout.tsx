import { Outlet } from "react-router-dom";
import SideBar from "../NavigationBar/SideBar";
import TopBar from "../NavigationBar/TopBar";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  return (
    <>
      <TopBar />
      <Box
        sx={{ display: "flex" }}
      >
        <SideBar />
          <Box component='div' sx={{p:5, pb:6, pt: 12, width: '100%',  backgroundColor: "#213F7D0F", color: "text.primary", fontFamily: "Work Sans"}}>
            <Outlet />
          </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;

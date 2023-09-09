import { Outlet } from "react-router-dom";
import SideBar from "../components/Navs/SideBar";
import {Box, Container} from "@mui/material";
import TopBar from "../components/Navs/TopBar";

const DashboardLayout = () => {
  return (
    <>
      <TopBar />
      <Box
        sx={{ display: "flex", height: "100vh" }}
      >
        <SideBar />
        <Container fixed sx={{ pb:6, pt: 10, backgroundColor: "#213F7D0F", width: '100%',  height: "100vh",   overflow: "auto" }}>
        <Box sx={{ color: "text.primary", fontFamily: "Work Sans", p: 2 }}>
          <Outlet />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DashboardLayout;

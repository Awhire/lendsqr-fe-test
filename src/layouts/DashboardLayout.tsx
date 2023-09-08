import { Outlet } from "react-router-dom";
import SideBar from "../components/Navs/SideBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default DashboardLayout;

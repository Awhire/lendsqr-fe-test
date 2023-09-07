import { Outlet } from "react-router-dom";
import SideBar from "../components/navs/SideBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TopBar from "../components/navs/TopBar";

const DashboardLayout = () => {
  return (
    <>
      <TopBar />
      <Box
        sx={{ display: "flex"}}
      >
        <SideBar />
        <Container fixed sx={{ pt: 10, backgroundColor: "#213F7D0F", width: '100%' }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default DashboardLayout;

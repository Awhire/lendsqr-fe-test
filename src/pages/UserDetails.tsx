import { Box, Divider, Typography } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import back from "../assets/back.svg";
import ButtonMui from "../components/ButtonMui";
import UserDetailsProfile from "../assets/userDetailsProfile.svg";
import Ratings from "../components/Ratings"
import GeneralDetails from "./GeneralDetails";



const UserDetails = () => {
  const navigate = useNavigate();
  const balance = 2000000;
  const userBalance = balance.toLocaleString();

  const BackToDashboard = () => {
    navigate(-1);
  };
  return (
    <Box component="div" >
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={BackToDashboard}
      >
        <img src={back} alt="back-arrow" />
        <Typography fontWeight={400}>Back to Dashboard</Typography>
      </Box>

      <Box
        component="div"
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontWeight={600} sx={{ mt: 2, fontSize: "20px" }}>
          Users Details
        </Typography>
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: 4,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ButtonMui title="BLACKLIST USER" color="error" />
          <ButtonMui title="ACTIVATE USER" color="success" />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "text.white",
          height: "180px",
          mt: 7,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 8,
            pt: 4,
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              style={{
                background: "rgba(33, 63, 125, 0.1)",
                padding: "24px",
                borderRadius: "100%",
              }}
            >
              <img src={UserDetailsProfile} alt="" width="30px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pl: 5,
                spaceY: 2,
              }}
            >
              <Typography
                component="h1"
                fontWeight={500}
                sx={{ color: "text.secondary", fontSize: "18px", mb: 1 }}
              >
                Grace Effiom
              </Typography>
              <Typography
                component="p"
                sx={{ color: "text.primary", fontSize: "12px" }}
              >
                LSQFf587g90
              </Typography>
            </Box>
          </Box>

          <Divider orientation="vertical" flexItem  sx={{height: "80px", ml: 5}} />

          <Box component="div" sx={{display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center", spaceY: 2}}>
            <Typography fontWeight={500} sx={{fontSize: "14px", color: "text.primary", mb: 1}} >User’s Tier</Typography>
            <Ratings />
          </Box>

          <Divider orientation="vertical" flexItem  sx={{height: "80px", ml: 5}} />


          <Box sx={{color: "text.secondary", pl: 5, flexDirection: "column", justifyContent: "center" }}>
            <Typography component="p" fontWeight={500} sx={{fontSize: "20px", mb: 1}}> &#8358;{userBalance} </Typography>
            <Typography component="p" sx={{fontSize: "12px"}}>9912345678/Providus Bank</Typography>
          </Box>

        <Box component="div">
          <Box component="div">
            {/* <UserDetailsNav /> */}
          </Box>
          <Box component="div" className="md:hidden">
            {/* <ListBoxUserDetails /> */}
          </Box>
        </Box>
        </Box>

      </Box>

      <Box sx={{backgroundColor: "text.white", mt: 5, borderRadius: "20px"}}>
            <GeneralDetails />
        
      </Box>

    </Box>
  );
};

export default UserDetails;

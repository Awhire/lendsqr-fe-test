import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStateValue } from "../context/Context";


import back from "../assets/user/back.svg";
import ButtonMui from "../components/ButtonMui";

import UserInfo from "../components/User/Details/UserInfo";
import GeneralDetails from "../components/User/Details/GeneralDetails";
import api from "../api/api";



const UserDetails = () => {
  const { value } = useStateValue();

  
    const selectedTabIndex = value;
  

  const { state } = useLocation();
  const navigate = useNavigate();

  const [activateLoading, setActivateLoading] = useState(false);
  const [blackListLoading, setBlackListLoading] = useState(false);

  const activate = async () => {
    try {
      setActivateLoading(true);
      const response = await api.activateUser(state._id);
      if (response.status === 200) {
        const message = response.data.message;
        toast.success(message);
        setActivateLoading(false);
      } else toast.error("Error in Activating User");
    } catch (error: any) {
      setActivateLoading(false);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong, please try again");
      }
    }
  };

  const blacklist = async () => {
    try {
      setBlackListLoading(true);
      const response = await api.blaclListUser(state._id);
      if (response.status === 200) {
        const message = response.data.message;
        toast.success(message);
        setBlackListLoading(false);
      } else toast.error("Error in Blacklisting User");
    } catch (error: any) {
      setBlackListLoading(false);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong, please try again");
      }
    }
  };

  const BackToDashboard = () => {
    navigate(-1);
  };
  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={BackToDashboard}
      >
        <img src={back} alt="back-arrow" />
        <Typography fontWeight={400} fontSize={16}>
          Back to Dashboard
        </Typography>
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
          <ButtonMui
            title="BLACKLIST USER"
            color="error"
            loading={blackListLoading}
            onClick={blacklist}
          />
          <ButtonMui
            title="ACTIVATE USER"
            color="primary"
            loading={activateLoading}
            onClick={activate}
          />
        </Box>
      </Box>

      <UserInfo />
      <Box sx={{ backgroundColor: "text.white", mt: 3, borderRadius: "4px" }}>
        <Box sx={{ display: selectedTabIndex === 0 ? " " : "none" }}>
          <GeneralDetails />
        </Box>
        <Box sx={{ display: selectedTabIndex === 1 ? " " : "none",  height: "100vh", p: 3 }}>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Documents
        </Typography>
        </Box>
        <Box sx={{ display: selectedTabIndex === 2 ? " " : "none",  height: "100vh", p: 3 }}>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Bank Details
        </Typography>
        </Box>

        <Box sx={{ display: selectedTabIndex === 3 ? " " : "none",  height: "100vh", p: 3 }}>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Loans
        </Typography>
        </Box>
        <Box sx={{ display: selectedTabIndex === 4 ? " " : "none",  height: "100vh", p: 3 }}>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Savings
        </Typography>
        </Box>

        <Box sx={{ display: selectedTabIndex === 5 ? " " : "none",  height: "100vh", p: 3 }}>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          App and System
        </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default UserDetails;

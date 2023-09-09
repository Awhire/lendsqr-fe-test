import { useLocation } from 'react-router-dom';
import { Box, Divider, Typography } from "@mui/material";

import userAvatar from "../../../assets/user/userAvatar.svg";
import Ratings from "../../Ratings";

const UserInfo = () => {
  const { state } = useLocation();

  return (
    <Box
    sx={{
      backgroundColor: "text.white",
      mt: 5,
      borderRadius: "4px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 3,
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        
          <img src={userAvatar} alt="userAvatar"  />
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pl: 3,
          }}
        >
          <Typography
            component="h1"
            fontWeight={500}
            sx={{ color: "text.secondary", fontSize: "18px", mb: 1 }}
          >
           {state.fullName}
          </Typography>
          <Typography
            component="p"
            sx={{ color: "text.primary", fontSize: "12px" }}
          >
                       {state.userName}

          </Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem  sx={{height: "80px", ml: 5}} />

      <Box component="div" sx={{display: "flex", flexDirection: "column",  justifyContent: "center", alignItems: "center", spaceY: 2}}>
        <Typography fontWeight={500} sx={{fontSize: "14px", color: "text.primary", mb: 1}} >User's Tier</Typography>
        <Ratings value={state.UserTier} />
      </Box>

      <Divider orientation="vertical" flexItem  sx={{height: "80px", ml: 5}} />


      <Box sx={{color: "text.secondary", pl: 5, flexDirection: "column", justifyContent: "center" }}>
        <Typography component="p" fontWeight={500} sx={{fontSize: "20px", mb: 1}}> {state.balance} </Typography>
        <Typography component="p" sx={{fontSize: "12px"}}>{state.bankDetails.accountNumber} / {state.bankDetails.bankName}</Typography>
      </Box>

    <Box component="div">
      <Box component="div">
        {/* <UserDetailsNav /> */}
      </Box>
      <Box component="div" className="">
        {/* <ListBoxUserDetails /> */}
      </Box>
    </Box>
    </Box>

  </Box>

  )
}

export default UserInfo

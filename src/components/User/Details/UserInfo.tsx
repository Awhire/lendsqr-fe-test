import { useLocation } from "react-router-dom";
import { Box, Divider, Typography, CardMedia, Grid } from "@mui/material";

import userAvatar from "../../../assets/user/userAvatar.svg";
import Ratings from "../../Ratings";
import UserDetailsNav from "./UserDetailsNav";

const UserInfo = () => {
  const { state } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "text.white",
        borderRadius: "4px",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Grid container spacing={2} sx={{ px: 3, pb: 2 }}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: 'space-between' },
              height: "100%",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={userAvatar}
                alt="userAvatar"
                sx={{
                  width: {
                    xs: "70px",
                    md: "80px",
                    lg: "100px",
                    objectFit: "contain",
                  },
                }}
              />

              <Box pl={3} sx={{}}>
                <Typography
                  component="h1"
                  fontWeight={500}
                  sx={{ color: "text.secondary", fontSize: "18px", mb: 1 }}
                >
                  {state.fullName}
                </Typography>
                <Typography
                  component="p"
                  textAlign='left'
                  sx={{ color: "text.primary", fontSize: "12px" }}
                >
                  {state.userName}
                </Typography>
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              sx={{ ml:3, display: { xs: "none", sm: "block" } }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3}>
        <Divider
              orientation="horizontal"
              sx={{ my:1.5, display: { xs: "block", sm: "none" } }}
              
            />
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: 'space-between' },
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                fontWeight={500}
                sx={{ fontSize: "14px", color: "text.secondary", mb: 1 }}
              >
                User's Tier
              </Typography>
              <Ratings value={state.UserTier} />
            </Box>
            <Divider
              orientation="vertical"
              sx={{ mr:3, display: { xs: "none", md: "block" } }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Divider
              orientation="horizontal"
              sx={{ my:1.5, display: { xs: "block", sm: "none" } }}
              
            />
          <Box
            sx={{
              color: "text.secondary",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              component="p"
              fontWeight={500}
              sx={{ fontSize: "20px", mb: 1 }}
            >
              {state.balance}
            </Typography>
            <Typography component="p" sx={{ fontSize: "12px" }}>
              {state.bankDetails.accountNumber} / {state.bankDetails.bankName}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <UserDetailsNav />
    </Box>
  );
};

export default UserInfo;

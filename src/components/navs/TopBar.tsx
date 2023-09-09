import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import lendsqr from "../../assets/lendsqr-logo.svg";
import notis from "../../assets/notis.svg";
import avatar from "../../assets/avatar.svg";
import dropdown from "../../assets/dropdown.svg";
import Grid from "@mui/material/Grid";
import { Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  const [profileImg, setProfileImg] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user !== null) {
      const userObj = JSON.parse(user);
      const profileImg = userObj.profilePicUrl;
      const fullName = userObj.fullName;
      setProfileImg(profileImg);
      setUserFullName(fullName);
      setUserFirstName(fullName.split(' ')[0]);
    }
  }, [user]);

  function stringAvatar(name: string) {
    const value = name ? name : ' '
    return {
      children: `${value.split(" ")[0][0]}${value.split(" ")[1][0]}`,
    };
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="elevation2"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "text.white",
          height: "70px",
          borderBottom: "1px light black",
        }}
      >
        <Toolbar>
          <Grid container spacing={2} sx={{ color: "text.secondary" }}>
            <Grid item md={2} sx={{ mt: 1 }}>
              <img src={lendsqr} alt="lendsqrLogo" width="120px" />
            </Grid>

            <Grid item md={10}>
              <Box
                sx={{
                  pl: 6,
                  pr: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Paper
                  component="form"
                  elevation={0}
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                    height: "40px",
                    borderRadius: "8px",
                    border: "1px solid ",
                    borderColor: "secondary",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontSize: "14px" }}
                    placeholder="Search for anything"
                    inputProps={{ "aria-label": "Search for anything" }}
                  />
                  <IconButton
                    type="button"
                    sx={{
                      px: 2,
                      mr: "-5px",
                      borderRadius: "0",
                      borderBottomRightRadius: "8px",
                      borderTopRightRadius: "8px",
                      color: "text.white",
                    }}
                    aria-label="search"
                    edge="end"
                    style={{ backgroundColor: "#39CDCC" }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>

                <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                  <Typography sx={{ textDecoration: "underline" }}>
                    Doc
                  </Typography>
                  <img src={notis} alt="notification" />
                  <Box
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Box component="div">
                      {profileImg ? (
                        <Avatar
                          src={profileImg}
                          sx={{ width: 32, height: 32 }}
                        />
                      ) : (
                        <Avatar
                          sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}
                          {...stringAvatar(userFullName)}
                        />
                      )}
                    </Box>

                    <Typography component="p">{userFirstName}</Typography>
                    <img src={dropdown} alt="" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;

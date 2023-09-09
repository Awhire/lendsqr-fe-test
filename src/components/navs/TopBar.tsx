import { useEffect, useState } from "react";
import {
  Typography,
  Toolbar,
  CssBaseline,
  AppBar,
  Box,
  Grid,
  Avatar,
  Paper,
  InputBase,
  IconButton,
  Popover,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import SearchIcon from "@mui/icons-material/Search";

import lendsqr from "../../assets/lendsqr-logo.svg";
import notis from "../../assets/notis.svg";
import dropdown from "../../assets/dropdown.svg";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const TopBar = () => {
  const navigate = useNavigate();

  const [profileImg, setProfileImg] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const user = localStorage.getItem("user");

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
    handleMenuClose();
    toast.success("Successfully logged out!");
  };

  const menuContent = (
    <Box sx={{ py: 1 }}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          pl: 2,
          pr: 6,
          py: 0.5,
          mb: 0.5,
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
        onClick={handleMenuClose}
      >
        <Person2OutlinedIcon fontSize="small" sx={{ color: "primary.main" }} />
        <Typography fontWeight={400} fontSize="14px">
          Profile
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          pl: 2,
          pr: 6,
          py: 0.5,
          mb: 0.5,
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
        onClick={handleMenuClose}
      >
        <SettingsSuggestOutlinedIcon
          fontSize="small"
          sx={{ color: "primary.main" }}
        />
        <Typography fontWeight={400} fontSize="14px">
          Settings
        </Typography>
      </Box>
      <Divider light sx={{ my: 0.5 }} />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          pl: 2,
          pr: 6,
          py: 0.5,
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
        onClick={logout}
      >
        <LogoutOutlinedIcon fontSize="small" sx={{ color: "primary.main" }} />
        <Typography fontWeight={400} fontSize="14px">
          Log out
        </Typography>
      </Box>
    </Box>
  );

  useEffect(() => {
    if (user !== null) {
      const userObj = JSON.parse(user);
      const profileImg = userObj.profilePicUrl;
      const fullName = userObj.fullName;
      setProfileImg(profileImg);
      setUserFullName(fullName);
      setUserFirstName(fullName.split(" ")[0]);
    }
  }, [user]);

  function stringAvatar(name: string) {
    const value = name ? name : " ";
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
                    borderColor: "text.gray",
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
                  <IconButton>
                    <Typography
                      className="prevent-select"
                      color={"secondary"}
                      sx={{ textDecoration: "underline" }}
                    >
                      Doc
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <img src={notis} alt="notification" />
                  </IconButton>
                  <Box
                    component="div"
                    onClick={(e) => handleMenuOpen(e)}
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
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "primary.main",
                          }}
                          {...stringAvatar(userFullName)}
                        />
                      )}
                    </Box>

                    <Typography
                      component="p"
                      pl={0.5}
                      fontWeight={500}
                      className="prevent-select"
                    >
                      {userFirstName}
                    </Typography>
                    <IconButton>
                      <img src={dropdown} alt="icon" />
                    </IconButton>
                  </Box>
                  <Popover
                    id={Boolean(anchorEl) ? "simple-popover" : undefined}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    elevation={1}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    {menuContent}
                  </Popover>
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

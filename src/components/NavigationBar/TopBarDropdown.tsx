import { Typography, Box, Divider } from "@mui/material";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function TopBarDropdown({ closeMenu }: any) {
  const handleMenuClose = closeMenu;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Successfully logged out!");
  };

  return (
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
        data-testid="profile-button"
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
        data-testid="settings-button"
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
        data-testid="logout-button"
      >
        <LogoutOutlinedIcon fontSize="small" sx={{ color: "primary.main" }} />
        <Typography fontWeight={400} fontSize="14px">
          Log out
        </Typography>
      </Box>
    </Box>
  );
}

export default TopBarDropdown;

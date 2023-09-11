import { useNavigate } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user");

  const backToDashboard = () => {
    navigate("/user");
  };

  const backToLogin = () => {
    navigate("/");
  };

  return (
    <Box
      component="div"
      sx={{
        textAlign: "center",
        color: "text.primary",
        backgroundColor: "#213F7D0F",
        height: "100vh",
      }}
    >
      <Box component="div" sx={{ pt: 14 }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          fontSize="60px"
          fontWeight={500}
          sx={{}}
        >
          4
          <Typography
            component="span"
            fontSize={60}
            sx={{ color: "primary.main" }}
          >
            0
          </Typography>
          4 - Page Not Found
        </Typography>
        <Typography variant="body1" fontSize={20} fontWeight={400}>
          The page you are looking for does not exist.
        </Typography>
        {isLoggedIn ? (
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, borderRadius: "10px", py: 1.5, px: 8 }}
            onClick={backToDashboard}
          >
            Back to Dashboard
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, borderRadius: "10px", py: 1.5, px: 8 }}
            onClick={backToLogin}
          >
            Back to Login
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NotFound;

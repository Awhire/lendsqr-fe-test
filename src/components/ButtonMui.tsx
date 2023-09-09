import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CircularProgress, Typography } from "@mui/material";

const ButtonMui = ({ title, color, loading, onClick }: any) => {
  return (
    <Box component="div">
      <Button
        variant="outlined"
        color={color}
        size="small"
        onClick={onClick}
        sx={{
          p: "16px",
          py: "8px",
          borderWidth: "1.5px",
          borderRadius: "8px",
        }}
      >
        {loading ? <CircularProgress color={color} size={13} /> : null}
        <Typography pl={1} fontSize={13} fontWeight={600}>
          {title}
        </Typography>
      </Button>
    </Box>
  );
};

export default ButtonMui;

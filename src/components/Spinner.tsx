import {CircularProgress, Box} from '@mui/material';


const Spinner = () => {
  return (
    <Box
    component="div"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      mt: "-120px"
    }}
  >
      <CircularProgress  size={80}
        thickness={2} color="primary" />
    </Box>
  )
}

export default Spinner

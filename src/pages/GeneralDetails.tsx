
import { Box, Typography, Grid, Divider } from "@mui/material";


const GeneralDetails = () => {
  return (
    <Box
      component="div"
      sx={{ p: 10, pt: 5, pl: 6, fontSize: "14px", color: "text.primary" }}
    >
      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          sx={{ color: "text.secondary", mb: 6 }}
        >
          Personal Information
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={2.4}>
            <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>FULL NAME</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>GRACE EFFIOM</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>PHONE NUMBER</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>07060780922</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>EMAIL ADDRESS</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>grace@gmail.com</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>BVN</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>07060780922</Typography>
            </Box>
            </Grid>
             <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>GENDER</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>Female</Typography>
            </Box>
            </Grid>
             <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>MARITAL STATUS</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>SINGLE</Typography>
            </Box>
            </Grid>
             <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>CHILDREN</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>None</Typography>
            </Box>
            </Grid >
             <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>TYPE OF RESIDENCE</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>Parent’s Apartment</Typography>
            </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider light sx={{mt: 6}} />


      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          sx={{ color: "text.secondary", mb: 6, mt: 5  }}
        >
          EDUCATION AND EMPLOYMENT
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={3}>
            <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>LEVEL OF EDUCATION</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>B.Sc</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>EMPLOYMENT STATUS</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>Employed</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>SECTOR OF EMPLOYMENT</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>FinTech</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>DURATION OF EMPLOYMENT</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>2 years</Typography>
            </Box>
            </Grid>
             <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>OFFICE EMAIL</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>grace@lendsqr.com</Typography>
            </Box>
            </Grid>
             <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>MONTHLY INCOME</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>₦200,000.00- ₦400,000.00</Typography>
            </Box>
            </Grid>
             <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>LOAN REPAYMENT</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>40,000</Typography>
            </Box>
            </Grid >
          </Grid>
        </Box>
      </Box>

      <Divider light sx={{mt: 6}} />

      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          sx={{ color: "text.secondary", mb: 6, mt: 5 }}
        >
          Socials
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={3}>
            <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>TWITTER</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>@grace_effiom</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>FACEBOOK</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>GRACE EFFIOM</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>Instagram</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>@grace_effiom</Typography>
            </Box>
            </Grid>
         
          </Grid>
        </Box>
      </Box>

      <Divider light sx={{mt: 6}} />

      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          sx={{ color: "text.secondary", mb: 6, mt: 5 }}
        >
          GUARANTOR
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={2.4}>
            <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>FULL NAME</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>DEBBY OGANA</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>PHONE NUMBER</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>07060780922</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>RELATIONSHIP</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>Sister</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>EMAIL ADDRESS</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>grace@gmail.com</Typography>
            </Box>
            </Grid>
            
          </Grid>
        </Box>

      <Divider light sx={{mt: 6, mb: 5}} />

      <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={2.4}>
            <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>FULL NAME</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>DEBBY OGANA</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>PHONE NUMBER</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>07060780922</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>RELATIONSHIP</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>Sister</Typography>
            </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={2.4}>
              <Box component="div" sx={{mb: 1}}>
                <Typography component="h1"  sx={{fontSize: "12px", mb: 1}}>EMAIL ADDRESS</Typography >
                <Typography component="p" sx={{fontSize: "14px"}} fontWeight={500}>grace@gmail.com</Typography>
            </Box>
            </Grid>
            
          </Grid>
        </Box>

      </Box>
    </Box>


   
  );
};

export default GeneralDetails;

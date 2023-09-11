import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { toast } from "react-toastify";

import api from "../../../api/api";
import Spinner from "../../Spinner";

const GeneralDetails = () => {
    
  const { state } = useLocation();
  const userID = state._id;

  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<any>({});


  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await api.getUerDetails(userID);
        if (response.status === 200) {
          const data = response.data;
          const filterData = data.find((item: any) => item._id === userID);
          setUserDetails(filterData);
          setLoading(false);
        } else toast.error("Error in User Details");
      } catch (error: any) {
        setLoading(false);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong, please try again");
        }
      }
    };

    getData();
  }, [userID]);

  return loading ? (
    <Spinner />
  ) : (
    <Box component="div" sx={{ p: 3, color: "text.primary" }}>
      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Personal Information
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  FULL NAME
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                 {userDetails.fullName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  PHONE NUMBER
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.phone}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  EMAIL ADDRESS
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.email}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  BVN
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.BVN}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  GENDER
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px", textTransform: 'capitalize' }}
                  fontWeight={500}
                >
                  {userDetails.gender}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  MARITAL STATUS
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.marritalStatus}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  CHILDREN
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.children}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  TYPE OF RESIDENCE
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.residenceType}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider light sx={{ my: 2 }} />

      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Education and Employment
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  LEVEL OF EDUCATION
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.educationLevel}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  EMPLOYMENT STATUS
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.employmentStatus}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  SECTOR OF EMPLOYMENT
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.employmentSector}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  DURATION OF EMPLOYMENT
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.employmentDuration} Years
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  OFFICE EMAIL
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.officialEmail}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  MONTHLY INCOME
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.monthlyIncome}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  LOAN REPAYMENT
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  ₦ {userDetails.loanRepayment.toLocaleString()}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider light sx={{ my: 2 }} />

      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Socials
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4} lg={3}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  TWITTER
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.twitter}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  FACEBOOK
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.facebook}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  Instagram
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.instagram}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider light sx={{ my: 2 }} />

      <Box>
        <Typography
          component="h1"
          fontWeight={500}
          fontSize={15}
          sx={{ color: "text.secondary", mb: 3 }}
        >
          Guarantor
        </Typography>
        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  FULL NAME
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.gurantor[0].fullName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  PHONE NUMBER
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.gurantor[0].phone}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  RELATIONSHIP
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.gurantor[0].relationship}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  EMAIL ADDRESS
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.gurantor[0].email}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider light sx={{ my: 3 }} />

        <Box component="div" sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  FULL NAME
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.gurantor[1].fullName}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  PHONE NUMBER
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.gurantor[1].phone}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  RELATIONSHIP
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                   {userDetails.gurantor[1].relationship}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <Box component="div" sx={{ mb: 1 }}>
                <Typography component="h1" sx={{ fontSize: "12px", mb: 1 }}>
                  EMAIL ADDRESS
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontSize: "14px" }}
                  fontWeight={500}
                >
                  {userDetails.gurantor[1].email}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default GeneralDetails;

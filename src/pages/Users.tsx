import { Box, Typography, Grid, CardContent, Card } from "@mui/material";
import users from "../assets/users.svg";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import api from "../api/api";
import { toast } from "react-toastify";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await api.getUersData();
        if (response.status === 200) {
          const data = response.data;
          console.log("data", data);

          setData(data);
        } else toast.error("Error in Getting Data");
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
  }, []);

  return (
    <Box sx={{ color: "text.primary", fontFamily: "Work Sans", p: 3 }}>
      <Typography
        component="h1"
        fontWeight={500}
        color="secondary"
        sx={{ fontSize: "24px" }}
      >
        User
      </Typography>

      <Box component="div" mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <Card sx={{ maxWidth: 240, pl: "10px" }}>
              <CardContent>
                <img src={users} alt="" />
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="p"
                  mt={1}
                  sx={{ fontSize: "14px" }}
                >
                  USERS
                </Typography>
                <Typography
                  component="h1"
                  fontWeight={600}
                  color="secondary"
                  sx={{ fontSize: "24px" }}
                >
                  2,453
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={3}>
            <Card sx={{ maxWidth: 240, pl: "10px" }}>
              <CardContent>
                <img src={users} alt="" />
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="p"
                  mt={1}
                  sx={{ fontSize: "14px" }}
                >
                  USERS
                </Typography>
                <Typography
                  component="h1"
                  fontWeight={600}
                  color="secondary"
                  sx={{ fontSize: "24px" }}
                >
                  2,453
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card sx={{ maxWidth: 240, pl: "10px" }}>
              <CardContent>
                <img src={users} alt="" />
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="p"
                  mt={1}
                  sx={{ fontSize: "14px" }}
                >
                  USERS
                </Typography>
                <Typography
                  component="h1"
                  fontWeight={600}
                  color="secondary"
                  sx={{ fontSize: "24px" }}
                >
                  2,453
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card sx={{ maxWidth: 240, pl: "10px" }}>
              <CardContent>
                <img src={users} alt="" />
                <Typography
                  variant="body1"
                  fontWeight={500}
                  component="p"
                  mt={1}
                  sx={{ fontSize: "14px" }}
                >
                  USERS
                </Typography>
                <Typography
                  component="h1"
                  fontWeight={600}
                  color="secondary"
                  sx={{ fontSize: "24px" }}
                >
                  2,453
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Table usersDataList={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;

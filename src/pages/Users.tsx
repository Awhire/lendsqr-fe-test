import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../api/api";
import { toast } from "react-toastify";
import Table from "../components/Table";
import UserCards from "../components/User/UserCards";

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
    <Box sx={{ color: "text.primary", fontFamily: "Work Sans", p: 2 }}>
      <Typography
        component="h1"
        fontWeight={500}
        color="secondary"
        sx={{ fontSize: "24px" }}
      >
        User
      </Typography>

      <Box component="div" mt={4}>
        <Box component="div">
          <UserCards usersDataList={data} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Table usersDataList={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default Users;

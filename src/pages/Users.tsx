import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TableData from "../components/User/TableData";
import CardData from "../components/User/CardData";
import Spinner from "../components/Spinner";
import api from "../api/api";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await api.getUersData();
        if (response.status === 200) {
          const data = response.data;
          setData(data);
          localStorage.setItem("tableData", JSON.stringify(data));
          setLoading(false);
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

    
    const localTableData: any = localStorage.getItem("tableData");
    if (localTableData) {
      setData(JSON.parse(localTableData));
      setLoading(false);
    } else getData();
  }, []);

  return (
    <Box >
      <Typography
        component="h1"
        fontWeight={500}
        color="secondary"
        sx={{ fontSize: "24px" }}
      >
        User
      </Typography>

      {loading ? (
        <Spinner />
      ) : (
        <Box component="div" mt={4}>
          <Box component="div">
            <CardData usersDataList={data} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <TableData usersDataList={data} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Users;

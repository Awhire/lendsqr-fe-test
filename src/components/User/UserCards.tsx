import { useState, useEffect } from 'react'
import users from "../../assets/users.svg";
import activeUsersIcon from "../../assets/active.svg"
import userLoan from "../../assets/usersLoan.svg"
import UserSaving from  "../../assets/userSavings.svg"
import { Typography, Grid, CardContent, Card } from "@mui/material";


const UserCards = (usersDataList: any) => {
  const data = usersDataList.usersDataList;
  
  const [usersLength, setUserSLength] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [usersWithLoan, setUsersWithLoan] = useState(0);
  const [usersWithSavings, setUsersWithSavings] = useState(0);

  useEffect(() => {
    setUserSLength(data.length);
    
    const activeUsersFilter = data.filter((user: { status: string; }) => user.status === 'Active');
    
    setActiveUsers(activeUsersFilter.length);
    
    const usersWithLoanFilter = data.filter((user: { isLoan: any; }) => user.isLoan);

    setUsersWithLoan(usersWithLoanFilter.length);

    const usersWithSavingFilter = data.filter((user: { isSaving: any; }) => user.isSaving);

    setUsersWithSavings(usersWithSavingFilter.length);

 }, [data]);

  return (
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
            {usersLength}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item sm={6} md={3}>
      <Card sx={{ maxWidth: 240, pl: "10px" }}>
        <CardContent>
          <img src={activeUsersIcon} alt="" />
          <Typography
            variant="body1"
            fontWeight={500}
            component="p"
            mt={1}
            sx={{ fontSize: "14px" }}
          >
            ACTIVE USERS
          </Typography>
          <Typography
            component="h1"
            fontWeight={600}
            color="secondary"
            sx={{ fontSize: "24px" }}
          >
            {activeUsers}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 240, pl: "10px" }}>
        <CardContent>
          <img src={userLoan} alt="" />
          <Typography
            variant="body1"
            fontWeight={500}
            component="p"
            mt={1}
            sx={{ fontSize: "14px" }}
          >
            USERS WITH LOANS
          </Typography>
          <Typography
            component="h1"
            fontWeight={600}
            color="secondary"
            sx={{ fontSize: "24px" }}
          >
            {usersWithLoan}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} md={3}>
      <Card sx={{ maxWidth: 240, pl: "10px" }}>
        <CardContent>
          <img src={UserSaving} alt="" />
          <Typography
            variant="body1"
            fontWeight={500}
            component="p"
            mt={1}
            sx={{ fontSize: "14px" }}
          >
             USERS WITH SAVINGS
          </Typography>
          <Typography
            component="h1"
            fontWeight={600}
            color="secondary"
            sx={{ fontSize: "24px" }}
          >
            {usersWithSavings}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  );
};

export default UserCards;

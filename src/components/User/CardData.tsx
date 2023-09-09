import { useState, useEffect } from "react";
import users from "../../assets/users.svg";
import activeUsersIcon from "../../assets/active.svg";
import userLoan from "../../assets/usersLoan.svg";
import UserSaving from "../../assets/userSavings.svg";
import { Typography, Grid, CardContent, Card } from "@mui/material";

const CardData = (usersDataList: any) => {
  const data = usersDataList.usersDataList;

  const [usersLength, setUserSLength] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [usersWithLoan, setUsersWithLoan] = useState(0);
  const [usersWithSavings, setUsersWithSavings] = useState(0);

  const cardValue = [
    {
      name: "USERS",
      avartar: users,
      count: usersLength,
    },
    {
      name: "ACTIVE USERS",
      avartar: activeUsersIcon,
      count: activeUsers,
    },
    {
      name: "USERS WITH LOANS",
      avartar: userLoan,
      count: usersWithLoan,
    },
    {
      name: "USERS WITH SAVINGS",
      avartar: UserSaving,
      count: usersWithSavings,
    },
  ];

  useEffect(() => {
    setUserSLength(data.length);

    const activeUsersFilter = data.filter(
      (user: { status: string }) => user.status === "Active"
    );

    setActiveUsers(activeUsersFilter.length);

    const usersWithLoanFilter = data.filter(
      (user: { isLoan: any }) => user.isLoan
    );

    setUsersWithLoan(usersWithLoanFilter.length);

    const usersWithSavingFilter = data.filter(
      (user: { isSaving: any }) => user.isSaving
    );

    setUsersWithSavings(usersWithSavingFilter.length);
  }, [data]);

  return (
    <Grid container spacing={3}>
      {cardValue.map((card, index) => (
        <Grid key={index} item xs={6} md={3}>
          <Card className="card-shadow" sx={{ maxWidth: 240, pl: "10px" }}>
            <CardContent>
              <img src={card.avartar} alt="" />
              <Typography
                variant="body1"
                fontWeight={500}
                component="p"
                mt={1}
                sx={{ fontSize: "14px" }}
              >
                {card.name}
              </Typography>
              <Typography
                component="h1"
                fontWeight={600}
                color="secondary"
                sx={{ fontSize: "24px" }}
              >
                {card.count}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardData;

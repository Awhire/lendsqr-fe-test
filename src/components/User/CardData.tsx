import users from "../../assets/users.svg";
import activeUsersIcon from "../../assets/active.svg";
import userLoan from "../../assets/usersLoan.svg";
import UserSaving from "../../assets/userSavings.svg";
import { Typography, Grid, CardContent, Card } from "@mui/material";

const CardData = ({ usersDataList }: any) => {
  const data = usersDataList;

  //get total list of users
  const usersLength = data.length;

  // filter active user using status key
  const activeUsersFilter = data.filter(
    (user: { status: string }) => user.status === "Active"
  );

  const activeUsers = activeUsersFilter.length;

  // filter users with loan using isLoan key
  const usersWithLoanFilter = data.filter(
    (user: { isLoan: boolean }) => user.isLoan
  );

  const usersWithLoan = usersWithLoanFilter.length;

  // filter users with savings using isSaving key
  const usersWithSavingFilter = data.filter(
    (user: { isSaving: boolean }) => user.isSaving
  );

  const usersWithSavings = usersWithSavingFilter.length;

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


  return (
    <Grid container spacing={3}>
      {cardValue.map((card, index) => (
        <Grid key={index} item xs={6} md={3}>
          <Card
            className="card-shadow"
            sx={{ maxWidth: 240, pl: "10px", height: "100%" }}
          >
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

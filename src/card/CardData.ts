
import users from "../assets/users.svg"
import active from "../assets/active.svg"
import usersLoan from "..active.svg"
import userSavings from "../assets/userSavings.svg"

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';


export const CardsData = [
    {
        title: "USERS",
        icon: users,
        numberOfUsers: "2,453"
    },

    {
        title: "ACTIVE USERS",
        icon: active,
        numberOfUsers: "2,453"
    },

    {
        title: "USERS WITH LOANS", 
        icon: usersLoan,
        numberOfUsers: "12,453"
    },
    {
        title: "USERS WITH SAVINGS",
        icon: userSavings,
        numberOfUsers: "102,456"
    },
]


export const cardsBenefits = [
    {
        title: "Lendsqr Online Form",
        icon: FormatIndentIncreaseIcon,
        color: "error",
        description: "We make our form super simple. It can be completed in minutes, just have your banking info handy. "
    },
    {
        title: "Lightspeed Response Time",
        icon: AccessAlarmsIcon,
        color: "success",
        description: "A lending decision can occur within minutes after your information is submitted. "
    },
    {
        title: "Money Lands Safely In Your Account",
        icon: AccountBalanceIcon,
        color: "warning",
        description: "Get money deposited into your bank account as soon as the next business day.  "
    },
]
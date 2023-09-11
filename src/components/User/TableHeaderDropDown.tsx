import { useState } from "react";
import {
  Typography,
  IconButton,
  Popover,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { SelectChangeEvent } from "@mui/material/Select";

const TableHeaderDropDown = ({ headerNameProps, handleFilterProps }: any) => {
  const selectedHeaderName = headerNameProps;
  const handleFilter = handleFilterProps;

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchInput, setSearchInput] = useState({
    organization: "",
    username: "",
    email: "",
    phone: "",
    date: "",
  });

  const { organization, username, email, phone, date } = searchInput;

  const handleSetSearchInput = (e: any) => {
    const newValue = { ...searchInput, [e.target.name]: e.target.value };
    setSearchInput(newValue);
  };

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    const initialState = {
      organization: "",
      username: "",
      email: "",
      phone: "",
      date: "",
    };

    setSearchInput(initialState);
    setSelectedStatus("");
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setSelectedStatus(event.target.value);
  };

  const handleFilterButton = (value: string) => {
    const searchParameter: any = {
      organizationName: organization,
      userName: username,
      email: email,
      phone: phone,
      createdAt: date,
      status: selectedStatus,
    };

    const text = searchParameter[selectedHeaderName];

    const dataToSend = {
      filterBy: selectedHeaderName,
      filterText: text,
      button: value,
    };
    handleFilter(dataToSend);
    handleMenuClose();
  };

  const filterMenu = (
    <Box
      component="div"
      sx={{ display: "flex", justifyContent: "space-between", mt: 4, mb: 1 }}
    >
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => handleFilterButton("reset")}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleFilterButton("filter")}
      >
        Filter
      </Button>
    </Box>
  );

  const organizationMenu = (
    <>
      <Typography fontWeight={500} fontSize={14} sx={{ pb: 1 }}>
        Organization
      </Typography>

      <TextField
        size="small"
        fullWidth
        placeholder="Organization"
        name="organization"
        value={organization}
        onChange={handleSetSearchInput}
      />
    </>
  );

  const userNameMenu = (
    <>
      <Typography fontWeight={500} fontSize={14} sx={{ pb: 1 }}>
        Username
      </Typography>

      <TextField
        size="small"
        fullWidth
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleSetSearchInput}
      />
    </>
  );
  const emailMenu = (
    <>
      <Typography fontWeight={500} fontSize={14} sx={{ pb: 1 }}>
        Email
      </Typography>

      <TextField
        size="small"
        fullWidth
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleSetSearchInput}
      />
    </>
  );
  const phoneNumberMenu = (
    <>
      <Typography fontWeight={500} fontSize={14} sx={{ pb: 1 }}>
        Phone Number
      </Typography>

      <TextField
        size="small"
        fullWidth
        placeholder="Phone Number"
        name="phone"
        value={phone}
        onChange={handleSetSearchInput}
      />
    </>
  );
  const dateMenu = (
    <>
      <Typography fontWeight={500} fontSize={14} sx={{ pb: 1 }}>
        Date
      </Typography>

      <TextField
        size="small"
        fullWidth
        placeholder="Date"
        name="date"
        value={date}
        onChange={handleSetSearchInput}
      />
    </>
  );
  const statusMenu = (
    <>
      <Typography fontWeight={500} fontSize={14} sx={{ pb: 1 }}>
        Status
      </Typography>

      <Select
        fullWidth
        size="small"
        value={selectedStatus}
        onChange={handleStatusChange}
      >
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
        <MenuItem value="Pending">Pending</MenuItem>
        <MenuItem value="Blacklisted">Blacklisted</MenuItem>
      </Select>
    </>
  );

  const menuContent = (
    <Box sx={{ p: 2, width: 200 }}>
      <>
        {selectedHeaderName === "organizationName" && organizationMenu}
        {selectedHeaderName === "userName" && userNameMenu}
        {selectedHeaderName === "email" && emailMenu}
        {selectedHeaderName === "phone" && phoneNumberMenu}
        {selectedHeaderName === "createdAt" && dateMenu}
        {selectedHeaderName === "status" && statusMenu}

        {filterMenu}
      </>
    </Box>
  );

  return (
    <>
      <IconButton
        aria-labelledby={Boolean(anchorEl) ? "simple-popover" : undefined}
        aria-label="more"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <FilterListIcon />
      </IconButton>
      <Popover
        id={Boolean(anchorEl) ? "simple-popover" : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        elevation={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {menuContent}
      </Popover>
    </>
  );
};

export default TableHeaderDropDown;

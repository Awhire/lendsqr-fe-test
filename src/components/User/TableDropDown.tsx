import { useState } from "react";
import { Typography, IconButton, Popover, Box, CircularProgress } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api/api";

import eyeIcon from "../../assets/user/eyeIcon.svg";
import bloackListIcon from "../../assets/user/bloackListIcon.svg";
import activateIcon from "../../assets/user/activateIcon.svg";

const TableDropDown = (rowData: any) => {
  const row = rowData.rowData;

  const navigate = useNavigate();
  const [activateLoading, setActivateLoading] = useState(false);
  const [blackListLoading, setBlackListLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState<any>(null);

  const handleMenuOpen = (event: any, rowData: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowData(rowData);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = async (value: string) => {
    const userID = selectedRowData._id;
    
    if (value === "activate") {
      try {
        setActivateLoading(true);
        const response = await api.activateUser(userID);
        if (response.status === 200) {
          const message = response.data.message;
          console.log(response)
          toast.success(message);
          setActivateLoading(false);
        } else toast.error("Error in Activating User");
      } catch (error: any) {
        setActivateLoading(false);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong, please try again");
        }
      }
    }

    else if (value === "blacklist") {
      try {
        setBlackListLoading(true);
        const response = await api.blaclListUser(userID);
        if (response.status === 200) {
          const message = response.data.message;
          console.log(response)
          toast.success(message);
          setBlackListLoading(false);
        } else toast.error("Error in Blacklisting User");
      } catch (error: any) {
        setBlackListLoading(false);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong, please try again");
        }
      }
    }

    else {
      navigate("details");
    }

    handleMenuClose();
  };

  const menuContent = (
    <Box sx={{ py: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          px: 2,
          py: 0.5,
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
        onClick={() => handleMenuItemClick("view")}
      >
        <img src={eyeIcon} alt="View Details" />
        <Typography fontWeight={400} fontSize="14px">
          View Details
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          px: 2,
          py: 0.5,
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
        onClick={() => handleMenuItemClick("blacklist")}
      >
      {blackListLoading ? <CircularProgress size={16} color="primary" /> :   <img src={bloackListIcon} alt="View Details" />}

        <Typography fontWeight={400} fontSize="14px">
          Blacklist User
        </Typography>
      </Box>
      <Box
      sx={{
        display: "flex",
        gap: 1,
        px: 2,
        py: 0.5,
        "&:hover": {
          backgroundColor: "primary.light",
          cursor: "pointer",
        },
      }}
      onClick={() => handleMenuItemClick("activate")}
    >
      {activateLoading ? <CircularProgress size={16} color="primary" /> :  <img src={activateIcon} alt="View Details" />}
      <Typography fontWeight={400} fontSize="14px">
        Activate User
      </Typography>
    </Box>
      
    </Box>
  );

  return (
    <>
      <IconButton
        aria-owns={Boolean(anchorEl) ? "simple-popover" : undefined}
        aria-label="more"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={(e) => handleMenuOpen(e, row)}
      >
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={Boolean(anchorEl) ? "simple-popover" : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        elevation={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuContent}
      </Popover>
    </>
  );
};

export default TableDropDown;

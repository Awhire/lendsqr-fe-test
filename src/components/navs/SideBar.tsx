import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItems from "./MenuItems";
import { NavLink, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import briefcase from "../../assets/sidebar/briefcase.svg";
import drop from "../../assets/sidebar/drop.svg";

const drawerWidth = 225;

const SideBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        className="scrollableY"
      >
        <List sx={{ mt: 8 }}>
          <Box my={1.5}>
            <ListItem disablePadding dense sx={{ color: "#39CDCC", py: "2px" }}>
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "35px" }}>
                  <img src={briefcase} alt="briefcase" />
                </ListItemIcon>
                <ListItemText
                  primary={"Switch Organization"}
                  primaryTypographyProps={{
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                  sx={{ color: "text.primary" }}
                />
                  <img src={drop} alt={"dropDown"} />
              </ListItemButton>
            </ListItem>
          </Box>

          {MenuItems.map((item: any, index: any) => (
            <Box key={index}>
              {item.categories && (
                <Typography
                  sx={{
                    mt: 2.5,
                    pl: "15px",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "text.primary",
                  }}
                >
                  {item.categories}
                </Typography>
              )}
              <ListItem
                disablePadding
                dense
                component={NavLink}
                to={item.path}
                sx={{ color: "#39CDCC", py: "2px" }}
              >
                <ListItemButton selected={pathname.includes(item.path)}>
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    <img src={item.icon} alt={item.name} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: pathname.includes(item.path) ? "500" : "400",
                      color: pathname.includes(item.path) ? "secondary" : "",
                    }}
                    sx={{ color: "text.primary" }}
                  />
                </ListItemButton>
              </ListItem>
            </Box>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItems from './MenuItems';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";


const drawerWidth = 225;

const SideBar = () => {
  const pathname = window.location.pathname
  
  return (
    <Box sx={{backgroundColor: "white"}} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        className="scrollableY"
      >
        <List sx={{mt: 8}}>
          {MenuItems.map((item:any, index:any) => (
            <Box key={index}>
            {item.categories && (
              <Typography  sx={{mt: 3, pl: '15px', fontSize: "14px", fontWeight: "600", color: "text.primary" }}>{item.categories}</Typography>
            )}
            <ListItem  disablePadding dense component={NavLink} to={item.path} sx={{ color: "#39CDCC", py: '4px'}}>
              <ListItemButton  selected={item.path === pathname}>
                <ListItemIcon sx={{minWidth: '35px'}}>
                  <img src={item.icon} alt={item.name}/>
                </ListItemIcon>
                <ListItemText primary={item.name} primaryTypographyProps={{fontSize: '15px', fontWeight: item.path === pathname ? '500': '400',  color: item.path === pathname ? 'secondary': ''}}  sx={{color: 'text.primary'} }/>
              </ListItemButton>
            </ListItem>
            </Box>
          ))}
        </List>
      </Drawer>
      </Box>
  );
}

export default SideBar
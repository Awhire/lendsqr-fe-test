import { Box } from '@mui/material'
import { useState } from 'react'
import { useStateValue } from '../../../contexts/Context';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const UserDetailsNav = () => {
  const { updateTabNav } = useStateValue();

  const [selected, setSelected] = useState(0)

  const handleChange = (event: any, index: number) => {
    setSelected(index);
    updateTabNav(index);
  };



  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 1200 }, bgcolor: 'background.paper',  }} fontSize="14px" >
    <Tabs
      value={selected}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
    >
      <Tab label="General Details" sx={{textTransform: 'none', fontWeight: "400"}} />
      <Tab label="Documents" sx={{px: 3,  textTransform: 'none', fontWeight: "400"}} />
      <Tab label="Bank Details" sx={{px: 3, textTransform: 'none', fontWeight: "400"}} />
      <Tab label="Loans" sx={{px: 3, textTransform: 'none', fontWeight: "400"}}/>
      <Tab label="Savings"  sx={{px: 3, textTransform: 'none', fontWeight: "400"}}/>
      <Tab label="App and System" sx={{px: 3, textTransform: 'none', fontWeight: "400"}}/>
    </Tabs>
  </Box>
  )
}

export default UserDetailsNav











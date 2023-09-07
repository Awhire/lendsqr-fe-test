import { Typography } from '@mui/material'
import Box from '@mui/material/Box'


const Dashboard = () => {
  return (
    <Box sx={{color:"text.primary", p: 3, pt: 5}}>
      <Typography component="h1" fontWeight={600} sx={{fontSize:"24px", color: "secondary" }}>Dashboard</Typography>
    </Box>
  )
}

export default Dashboard

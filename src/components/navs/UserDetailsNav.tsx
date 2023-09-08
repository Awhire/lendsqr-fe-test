import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from "react-router-dom"

const subMenu = [
    {
        id: 1,
        title: 'General Details',
        path: '/user-details'
    },
    {
        id: 2,
        title: 'Documents',
        path: '/user/documents'
    },
    {
        id: 3,
        title: 'Bank Details',
        path: '/user/bank-details'
    },
    {
        id: 4,
        title: 'Loans',
        path: '/user/loans'
    },
    {
        id: 5,
        title: 'Savings',
        path: '/user/savings'
    },
    {
        id: 6,
        title: 'App and System',
        path: '/user/app&system'
    }
]

const UserDetailsNav = () => {
  const [selected, setSelected] = useState(0)

  return (
    <Box component="div" fontWeight={500} sx={{pt: 4, pl: 20, fontSize:"16px"} }>
      {subMenu.map((item, index) => (
        <Link to={item.path} key={item.id} className={selected === index ? 'userNav active' : 'userNav'} onClick={() => setSelected(index)} >
            {item.title}
        </Link>
      ))}
    </Box>
  )
}

export default UserDetailsNav

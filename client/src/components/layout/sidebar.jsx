import { Dashboard as DashboardIcon, ExitToApp, Group as GroupIcon, ManageAccounts as ManageAccountsIcon, Message as MessageIcon } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ w = "100%" }) => {

  const location = useLocation()



  const adminTabs = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      path: "/admin/dashboard",
    },
    {
      name: "Users",
      icon: <ManageAccountsIcon />,
      path: "/admin/user-management",
    },
    {
      name: "Chats",
      icon: <GroupIcon />,
      path: "/admin/chat-management",
    },
    {
      name: "Messages",
      icon: <MessageIcon />,
      path: "/admin/message-management",
    },
  ]

  const logoutHandler = () => {
    console.log("running logoutHandler")
  }




  return (
    <Stack width={w} direction={"column"} padding={"2rem"} spacing={"3rem"}>

      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <Link to="/admin"
          style={

            {
              color: '#000000',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
          <img src="/Messenger.png" alt="" width="40px" />  Messenger
        </Link>
      </Typography>



      <Stack spacing={"1rem"}>
        {
          adminTabs.map((tab) => (
            <Link to={tab.path} key={tab.name}
              style={
                location.pathname === tab.path ? {
                  color: '#ffffff', backgroundColor: '#000000', borderRadius: '5px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem'
                } :
                  { color: '#000000', backgroundColor: '#ffffff', borderRadius: '5px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <IconButton sx={location.pathname === tab.path ? { color: '#ffffff' } : { color: '#000000' }}>
                {tab.icon}
              </IconButton>
              <Typography variant="h6" fontSize={"0.8rem"}>
                {tab.name}
              </Typography>
            </Link>
          ))
        } 

            <Link   onClick={logoutHandler}
              style={
                  { color: '#000000', backgroundColor: '#ffffff', borderRadius: '5px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <IconButton sx={{ color: '#000000' }}>
                <ExitToApp  />
              </IconButton>
              <Typography variant="h6" fontSize={"0.8rem"}>
                Logout
              </Typography>
            </Link>

      </Stack>

    </Stack>
  )
}

export default Sidebar
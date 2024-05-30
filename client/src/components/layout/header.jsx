import { AppBar,  Backdrop,  Box, IconButton, Toolbar, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon,Notifications as NotificationsIcon, Logout as LogoutIcon } from "@mui/icons-material"
import { Link, useNavigate } from 'react-router-dom'
import IconBtn from '../iconBtn/headerBtns'

const SearchDialog = lazy(() => import('../features/search/searchDialog'));
const NotificationDialog = lazy(() => import('../features/notification/notificationDialog'));
const NewGroupDialog = lazy(() => import('../features/group/newGroupDialog'));



const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);



  const navigate = useNavigate()

  function handleMenu() {
    console.log("handleMenu")
    setIsMobile((prev) => !prev)
  }

  function openSearch() {
    console.log("openSearch")
    setIsSearch((prev) => !prev)
  }

  function openNewGroup() {
    setIsNewGroup((prev) => !prev)
  }

  function navifateToGroup() {
    console.log("navifateToGroup running")
    navigate("/group")
  }

  function openNotification() {
    setIsNotification((prev) => !prev)
  }

  function handleLogout() {
    console.log("handleLogout")
  }


  return (

    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar position="static" sx={{ bgcolor: 'info.main' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Realtime Chat App
            </Link>
          </Typography>

          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton color="inherit" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
          </Box>



          <Box>
            <IconBtn title="Search" icon={<SearchIcon />} onClick={openSearch} />
            <IconBtn title="New Group" icon={<AddIcon />} onClick={openNewGroup} />
            <IconBtn title="Manage Group" icon={<GroupIcon />} onClick={navifateToGroup} />
            <IconBtn title="Notificatons" icon={<NotificationsIcon />} onClick={openNotification} />
            <IconBtn title="Logout" icon={<LogoutIcon />} onClick={handleLogout} />

          </Box>

        </Toolbar>
      </AppBar>
    </Box>

    {
      isSearch &&  (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
        )
    }

    {
      isNotification &&  (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
        )
    }

    {
      isNewGroup &&  (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>)
    }

  </>
  )
}




export default Header
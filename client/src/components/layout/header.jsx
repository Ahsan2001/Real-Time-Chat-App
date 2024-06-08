import { AppBar, Backdrop, Box, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Notifications as NotificationsIcon, Logout as LogoutIcon } from "@mui/icons-material"
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
        <AppBar position="static" sx={{ bgcolor: 'secondary.dark' }}>
          <Toolbar>

            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/Messenger.png" alt="" width="40px" />  Messenger
              </Link>
            </Typography>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}>
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
        isSearch && (
          <Suspense fallback={<Backdrop open />}>
            <SearchDialog />
          </Suspense>
        )
      }

      {
        isNotification && (
          <Suspense fallback={<Backdrop open />}>
            <NotificationDialog />
          </Suspense>
        )
      }

      {
        isNewGroup && (
          <Suspense fallback={<Backdrop open />}>
            <NewGroupDialog />
          </Suspense>)
      }





      {/* mobile menu start  */}

      <Drawer sx={{ display: { xs: "block", sm: "none" } }} open={isMobile} onClose={handleMenu}>
          <Stack direction={"column"} spacing={"1rem"} p={"1rem"}>
              <IconBtn title="Search"  icon={<SearchIcon />} onClick={openSearch} />
              <IconBtn title="New Group" icon={<AddIcon />} onClick={openNewGroup} />
              <IconBtn title="Manage Group" icon={<GroupIcon />} onClick={navifateToGroup} />
              <IconBtn title="Notificatons" icon={<NotificationsIcon />} onClick={openNotification} />
              <IconBtn title="Logout" icon={<LogoutIcon />} onClick={handleLogout} />
          </Stack>
      </Drawer>


    </>
  )
}




export default Header
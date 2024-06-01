import React, { useState } from 'react'
import { Drawer, Grid } from '@mui/material';
import { KeyboardBackspace as KeyboardBackspaceIcon , Menu as MenuIcon } from '@mui/icons-material';
import IconBtn from '../components/iconBtn/headerBtns';
import { useNavigate } from 'react-router-dom';

const Group = () => {


  const navigate = useNavigate()
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleBackNavigation = () => {
    navigate("/")
  }


  const handleMenu = () => {
    setIsMobileOpen((prev) => !prev)
  }

  
  const handleMenuClose = () => {
    setIsMobileOpen(false)
  }


  return (
    <>
      <Grid container height={"100vh"}>
        <Grid item
          sx={{
            display: {
              xs: "none",
              sm: "block"
            },
            background: "linear-gradient(135deg, #360940 0%, #F05F57 100%);"
          }}
          sm={4}
          > 
          4 SM
        </Grid>
        <Grid item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            padding: "1rem 3rem"
          }}
          xs={12}
          sm={8}
          > 
          
          <IconBtn 
            title="Back" 
            icon={<KeyboardBackspaceIcon />} sx={{ position: "absolute", top: "1rem", left: "1rem"}} 
            onClick={handleBackNavigation}  
          />
          
          <IconBtn 
            title="Menu" 
            icon={<MenuIcon />} sx={{ display: { xs: "block", sm: "none" }, ":hover" : {backgroundColor: "transparent"},  position: "absolute", top: "1rem", right: "1rem"}} 
            onClick={handleMenu}  
          />

          <Drawer sx={{ display: { xs: "block", sm: "none" } }} open={isMobileOpen} onClose={handleMenuClose}>
            Testing
          </Drawer>


        </Grid>
      </Grid>
    </>
  )
}
export default Group;
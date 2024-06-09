import React, { useState } from 'react'
import Sidebar from './sidebar'
import { Box, Drawer, Grid, IconButton } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'

const AdminLayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false);

    function handleMenu() {
        console.log("handleMenu")
        setIsMobile((prev) => !prev)
    }

    function handleMenuClose() {
        console.log("handleMenu")
        setIsMobile(false)
    }

    return (
        <Grid container height={"100vh"}>
            <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
                <Sidebar />
            </Grid>
            <Grid item md={8} lg={9} xs={12}>
                {children}
            </Grid>










            {/* Mobile view */}

            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    top: "1rem",
                    right: "1rem",
                }}
            >
                <IconButton onClick={handleMenu}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>


            <Drawer open={isMobile} onClose={handleMenuClose}>
                <Sidebar w={"50vw"} />
            </Drawer>



        </Grid>
    )
}

export default AdminLayout
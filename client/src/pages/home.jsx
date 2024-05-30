import React from 'react'
import AppLayout from '../components/layout/appLayout';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box bgcolor={"#f5f5f5"} height="100%" display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h4" textAlign="center">
          Select friend to start chat
      </Typography>
    </Box>
  )
}

export default AppLayout()(Home);
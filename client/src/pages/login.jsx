import React, { useState } from 'react'
import {Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from "@mui/material"
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/styledComponents';

const Login = () => {

  const [isLogin, setLogin] = useState(true); 
  
  return (
    <Container component={"main"} maxWidth="xs" sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Paper elevation={3} sx={{padding: 3, display: "flex", flexDirection: "column", alignItems: "center"}}>
        {
          isLogin ?
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{
                marginTop: "1rem",
                width: "100%",
              }}>
              <TextField 
                required
                label="Email"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <TextField 
                required
                type='password'
                label="Password"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <Button fullWidth variant="contained" sx={{marginTop: 3}} type='submit' color="primary">Login</Button>
              <Typography textAlign={"center"} varient="h5" sx={{marginTop: 3}}>OR</Typography>
              <Button  fullWidth sx={{marginTop: 3}} onClick={() => setLogin(false)} >Sign up instead</Button>
            </form> 
          </>
          :
          <>
            <Typography variant="h5">Sign up</Typography>
            <form style={{
                marginTop: "1rem",
                width: "100%",
              }}>

              <Stack position="relative" width="7rem" margin="auto">
                <Avatar sx={{width: "7rem", height: "7rem", objectFit: "contain"}} />
                <IconButton sx={{position: "absolute", bottom: 0, right: 0, color: "white", bgcolor: "black" , ":hover": {bgcolor: "green"}}} component="label"> 
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              
              <TextField 
                required
                label="Email"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <TextField 
                required
                label="Username"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <TextField 
                required
                label="Bio"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <TextField 
                required
                type='password'
                label="Password"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <Button fullWidth variant="contained" sx={{marginTop: 3}} type='submit' color="primary">Sign up</Button>
              <Typography textAlign={"center"} varient="h5" sx={{marginTop: 2}}>OR</Typography>
              <Button  fullWidth sx={{marginTop: 2}} onClick={() => setLogin(true)} >Login instead</Button>
            </form> 
          </>
        }
      </Paper>
    </Container>
  )
}

export default Login
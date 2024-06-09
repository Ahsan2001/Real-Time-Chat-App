import React, { useEffect, useState } from 'react'
import { Button, Container, Paper,  TextField, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => { 

  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    setIsAdmin(true)
    console.log("running handleSubmit")
  }

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin/dashboard");
    }
  }, [isAdmin, navigate]);

  return (
    <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3} sx={{ padding: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {
          <>
            <Typography variant="h5">Admin Login</Typography>
            <form style={{
              marginTop: "1rem",
              width: "100%",
            }}
              onSubmit={submitHandler}
            >
              
              <TextField
                required
                type='password'
                label="Secret Key"
                variant="outlined"
                margin='normal'
                fullWidth
              />
              <Button fullWidth variant="contained" sx={{ marginTop: 3 }} type='submit' color="primary">Login</Button>
            </form>
          </>
        }
      </Paper>
    </Container>
  )
}

export default AdminLogin
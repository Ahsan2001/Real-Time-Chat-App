import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/layout/appLayout';
import { IconButton, Stack } from '@mui/material';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/styledComponents';

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <Fragment>

      <Stack

        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        height={"90%"}
        spacing={"1rem"}
        bgcolor={"#f5f5f5"}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
      ></Stack>

      <form style={{ height: "10%" }}>
        <Stack height={"100%"} direction={"row"} p={"1rem"} alignContent={"center"} position={"relative"}>
          <IconButton sx={{ position: "absolute", left: "1.5rem" }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox type="text" placeholder="Type a message" />
          <IconButton type="submit" 
            sx={{
              position: "absolute", right: "1.5rem",
              bgcolor: "primary.main",
              color: "white",
              marginLeft: "1rem",
              padding: "0.3rem",
              "&:hover": {
                bgcolor: "primary.dark",
              }
            }}
          >
            <SendIcon   />
          </IconButton>
        </Stack>
      </form>

    </Fragment>
  )

}

export default AppLayout()(Chat);

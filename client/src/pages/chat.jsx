import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/layout/appLayout';
import { IconButton, Stack } from '@mui/material';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/styledComponents';
import FileMenu from '../components/shared/fileMenu';
import { SampleMessages } from '../data';
import ChatMessage from '../components/shared/message';

const Chat = () => {
  const containerRef = useRef(null);

  const user = {
    name: "Ahsan",
    _id: "akjsdkhayufg"
  }



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
      >
        {
          SampleMessages.map((i)=>(
            <ChatMessage message={i} user={user} />
          ))
        }
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack height={"100%"} direction={"row"} p={"1rem"} alignContent={"center"} position={"relative"}>
          <IconButton sx={{ position: "absolute", left: "1.5rem" }}>
            <AttachFileIcon />
          </IconButton>
          <InputBox type="text" placeholder="Type a message" />
          <IconButton type="submit" 
            sx={{
              position: "absolute", right: "1.5rem",
              bgcolor: "secondary.main",
              color: "white",
              marginLeft: "1rem",
              padding: "0.3rem",
              "&:hover": {
                bgcolor: "secondary.dark",
              }
            }}
          >
            <SendIcon   />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </Fragment>
  )

}

export default AppLayout()(Chat);

import { Typography } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react'

const ChatMessage = ({ message , user}) => {
  
  const {sender, content, createdAt, attachments=[]} = message;

  const sameSender = sender._id === user._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div style={{
      alignSelf: sameSender ? "flex-end" : "flex-start",
      backgroundColor: "#ffffff",
      color: "black",
      borderRadius: "4px",
      padding: "0.5rem",
      width: "fit-content"
    }}>

      {
        !sameSender && <Typography color={"secondary.dark"} fontWeight={600} variant='caption'>
            {sender.name}
        </Typography>}

        {
          content && <Typography>
            {content}
        </Typography>}

        <Typography variant='caption' collor={"text.secondary"}>
            {timeAgo}
        </Typography>
    </div>
  )
}

export default memo(ChatMessage)
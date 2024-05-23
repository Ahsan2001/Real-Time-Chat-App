import React, { memo } from 'react'
import { Link } from '../styles/styledComponents'
import { Box, Stack, Typography } from '@mui/material'
import AvatarCard from '../shared/avatarCard'

const ChatItems = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChat
}) => {
    return (
        <Link to={`/chat/${_id}`} onContextMenu={(e) => { e, handleDeleteChat(e, _id, groupChat) }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: sameSender ? "black" : "unset",
                color: sameSender ? "white" : "unset",
                position: "relative",
            }}>
                <AvatarCard avatar={avatar} />
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && <Typography>{newMessageAlert.count} New Message</Typography>}
                </Stack>
                {
                    isOnline && <Box sx={{
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        bgcolor: "green",
                        position: "absolute",
                        right: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}></Box>
                }
            </Box>
        </Link>
    )
}

export default memo(ChatItems)
import React, { memo } from 'react'
import { Link } from '../styles/styledComponents'
import { Box, Stack, Typography } from '@mui/material'

const ChatItems = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChatOpen
}) => {
    return (
        <Link to={`/chat/${_id}`} onContextMenu={(e) => { e, handleDeleteChatOpen(e, _id, groupChat) }}>
            <div sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                backGroundColor: sameSender ? "black" : "unset",
                color: sameSender ? "white" : "unset",
                position: "relative",
            }}>
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && <Typography>{newMessageAlert.count} New Message</Typography>}
                </Stack>
                {
                    isOnline && <Boxx sx={{
                        width: "1rem",
                        height: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "green",
                        position: "absolute",
                        right: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)"
                    }}></Boxx>
                }
            </div>
        </Link>
    )
}

export default memo(ChatItems)
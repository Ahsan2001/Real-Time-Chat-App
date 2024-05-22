import { Stack } from '@mui/material'
import React from 'react'
import ChatItems from './chatItems'

const ChatList = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessageAlerts = [{
        chatId: "",
        count: 0
    }],

}) => {
    return (
        <Stack width={w}>
            {chats.map((data) => {
                return (
                    <ChatItems data={data} />
                )
            })}
        </Stack>
    )
}

export default ChatList
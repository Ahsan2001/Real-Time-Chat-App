import { Stack } from '@mui/material'
import React from 'react'
import ChatItems from './chatItems'

const ChatList = ({
    w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [{
        chatId: "",
        count: 0
    }],
    handleDeleteChat
}) => {


    return (
        <Stack width={w} height={"100%"} overflow={"auto"}>
            {chats.map((data, index) => {
                const { _id, name, avatar, groupChat, members } = data

                const newMessageAlert = newMessagesAlert.find(chat => chat.chatId === _id)
                
                const isOnline = members.some(member => onlineUsers.includes(_id))
                return (
                    <ChatItems 
                        newMessageAlert={newMessageAlert} 
                        isOnline={isOnline} 
                        name={name} 
                        avatar={avatar} 
                        groupChat={groupChat} 
                        sameSender={chatId === _id}
                        _id={_id}
                        key={_id}
                        index={index}
                        handleDeleteChat={handleDeleteChat}
                    />
                )
            })}
        </Stack>
    )
}

export default ChatList
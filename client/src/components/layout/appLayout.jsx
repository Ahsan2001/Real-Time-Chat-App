import React from 'react'
import Header from './header'
import Title from '../shared/title'
import { Grid } from '@mui/material'
import ChatList from "../Chat/chatList"
import { SampleChat } from '../data/chat'
import { useParams } from 'react-router-dom'

const AppLayout = () => (WrappedComponent) => {
    return (props) => {

        const params = useParams();
        const chatId = params.id;



        const handleDeleteChat = (e, _id, groupChat) => {
            e.preventDefault();
            console.log(`delete chat ${_id}`, groupChat)
        }

        return (
            <>
                <Title />
                <Header />
                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" } }} height={"100%"}>
                        <ChatList 
                        chats={SampleChat} 
                        chatId={chatId}
                        newMessagesAlert={[{  chatId , count: 4 }]}
                        onlineUsers={["1", "2"]}
                        handleDeleteChat={handleDeleteChat}
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}><WrappedComponent  {...props} /></Grid>
                    <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" }, padding: "2rem", bgcolor: 'text.primary' }} height={"100%"}></Grid>
                </Grid>
            </>
        )
    }
}

export default AppLayout
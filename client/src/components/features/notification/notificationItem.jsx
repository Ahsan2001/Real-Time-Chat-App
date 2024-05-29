import { Avatar, Button, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'

const NotificationItem = ({ sender, _id, handler }) => {
    const { name, avatar } = sender
    return (
        <ListItem>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
                <Avatar />
                <Typography
                    variant='body1'
                    sx={{
                        flexGlow: 1,
                        display: "-webkit-box",
                        webkitLineClamp: "1",
                        webkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100%",
                    }}>{`${name} sent you a friend request`}</Typography>

                <Stack direction={{
                        xs: "column",
                        sm: "row",
                    }}>
                    <Button onClick={() => handler({_id, accept: true})}>Accept</Button>
                    <Button onClick={() => handler({_id, accept: false})}color='error'>Reject</Button>
                </Stack>
            </Stack>
        </ListItem>
    )
}

export default memo(NotificationItem)
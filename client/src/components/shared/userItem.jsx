import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

const UserItem = ({ user, handler, handleIsLoading, isAdded = false }) => {
    const { name, _id, avatar } = user
    return (
        <ListItem>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
                <Avatar />
                <Typography
                    variant='body1'
                    sx={{
                        flexGlow: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        webkitLineClamp: "1",
                        width: "100%",
                        webkitBoxOrient: "vertical",
                    }}>{name}</Typography>
                <IconButton
                    size="small"
                    sx={{
                        color: "white",
                        bgcolor: isAdded ? "error.main" : "primary.main",
                        "&:hover": {
                            bgcolor: isAdded ? "error.main": "primary.dark",
                        }
                    }}
                    onClick={() => handler(_id)} disabled={handleIsLoading}>
                   {isAdded? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </Stack>
        </ListItem>
    )
}

export default memo(UserItem)
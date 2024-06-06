import React, { memo } from 'react'
import { Stack, Typography } from '@mui/material';
import AvatarCard from '../shared/avatarCard';
import { Link } from '../styles/styledComponents'

const GroupItem = ({ group, chatId , mobile = false}) => {
    const { name, avatar, _id } = group;
    return (
        <Link  sx={{color: mobile ? "black" : "white", ":hover": {background: " #F05F57"}}} to={`?group=${_id}`} onClick={(e) => { if (chatId === _id) e.preventDefault() } }>
            <Stack direction={"row"} spacing={"1rem"} padding={"1rem"} alignItems={"center"}>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    )
}

export default memo(GroupItem)
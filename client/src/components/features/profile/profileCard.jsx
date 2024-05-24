import { Stack, Typography } from '@mui/material'
import React from 'react'

const ProfileCard = ({heading,text, Icon}) => {
  return (
    <Stack spacing={"1rem"} color={"white"} textAlign={"center"} direction={"row"} alignItems={"center"}>
        {Icon ? Icon : null} 
        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color={"gray"} variant='caption' >{heading}</Typography>
        </Stack>
    </Stack>
  )
}

export default ProfileCard
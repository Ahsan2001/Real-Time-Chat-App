import { Avatar, Stack } from '@mui/material'
import React from 'react'
import ProfileCard from './profileCard'
import { Face as FaceIcon, AlternateEmail as UserIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material' 
import moment from 'moment'

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
        <Avatar
            sx={{ 
                width: "6rem", 
                height: "6rem", 
                objectFit: "contain" , 
                marginBottom: "1rem" , 
                border: "5px solid white"
            }}
        />
        <ProfileCard heading={"Name"} text={"Muhammad Ahsan"} Icon={<FaceIcon />}/>
        <ProfileCard heading={"Username"} text={"Ahsan2001"} Icon={<UserIcon />}/>
        <ProfileCard heading={"Bio"} text={"Software Engineer"} />
        <ProfileCard heading={"Joined"} text={moment('2025-11-02T16:00:00.000Z').fromNow()} Icon={<CalendarIcon />} />


    </Stack>
  )
}

export default Profile
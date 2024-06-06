import { Stack, Typography } from '@mui/material'
import React from 'react'
import GroupItem from './groupItem'

const GroupList = ({w="100%", myGroups=[], chatId,mobile}) => {
  return (
    <Stack width={w}>
        {myGroups.length > 0 ? 
        myGroups.map((group) => (
            <GroupItem  key={group._id} group={group} mobile={mobile} chatId={chatId} />
        )) :<Typography textAlign={"center"} padding={"1rem 0"}>No Groups</Typography>}
    </Stack>
  )
}
export default GroupList
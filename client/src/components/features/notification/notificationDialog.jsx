import { Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React from 'react'
import { SampleNotifications } from '../../../data'
import NotificationItem from './notificationItem'

const NotificationDialog = () => {

  const handleFriendRequest = ({_id,accept}) => {
    console.log(id)
  }

  return (
    <Dialog open>
        <Stack p={"2rem"} direction={"column"} width={"25rem"}>
            <DialogTitle textAlign={"center"}>Notifications</DialogTitle>
            {
              SampleNotifications.length > 0 ? 
              
              SampleNotifications.map(({sender, _id}) => <NotificationItem  handler={handleFriendRequest} key={_id} sender={sender} _id={_id} />)
              
              : <Typography>0 Notifications</Typography> 
            }
        </Stack>
    </Dialog>
  )
}

export default NotificationDialog
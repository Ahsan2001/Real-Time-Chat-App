import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import UserItem from '../shared/userItem'
import { SampleUser } from '../../data'

const NewGroupDialog = () => {


  const [searchMember, setSearchMember] = useState("");
  const [members, setMembers] = useState(SampleUser);
  const [selectedMembers, setSelectedMembers] = useState([]);



  // console.log(selectedMembers)

  const selectMemberHandler = (id) =>{
    setSelectedMembers((prev) =>
    prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }


  const submitHandler = () => {
    console.log("running handleSubmit")
  }



  const closeHandler = () => {  
      console.log("running closeHandler")
  }


  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} spacing={"1rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"} variant='h4'>New Groups</DialogTitle>

        <TextField
            label="Group Name"
            value={searchMember}
            onChange={(e) => setSearchMember(e.target.value)}
            variant="outlined"
            size="small"
         />

        <Typography variant='body1'>Members</Typography>

        <Stack>
          {
            members.map((i, index) => (
              <UserItem
                key={index}
                user={i}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)} />
            ))
          }
        </Stack>


          <Stack direction={"row"} spacing={"1rem"} marginTop={"1rem"} justifyContent={"space-evenly"}>
            <Button variant='outlined' color='error'>Cancel</Button>
            <Button variant='contained' onClick={submitHandler}>Create</Button>
          </Stack>


      </Stack>
    </Dialog>
  )
}

export default NewGroupDialog
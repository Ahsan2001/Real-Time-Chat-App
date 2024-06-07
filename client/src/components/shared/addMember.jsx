import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { SampleUser } from '../../data';
import UserItem from './userItem';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const AddMemberDialog = ({ addMember, isLoadingMember, chatId }) => {


  

    const addMemberHandler = () => {
        addMember(chatId)
    }

    
    const closeHandler = () => {
        console.log("running closeHandler")
    }










    const [members, setMembers] = useState(SampleUser);
    const [selectedMembers, setSelectedMembers] = useState([]);


    const selectMemberHandler = (id) =>{
        setSelectedMembers((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
    }

    return (
        <React.Fragment>
            <Dialog
                open
                onClose={closeHandler}
                TransitionComponent={Transition}
                keepMounted
            >
                <Stack p={"1rem"} spacing={"1rem"} width={"25rem"}>
                    <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
                    <DialogContent>
                        <Stack spacing={"1rem"}>
                            {
                                members.length > 0 ?
                                    members.map((i) => (
                                        <UserItem
                                            key={i._id}
                                            user={i}
                                            handler={selectMemberHandler}
                                            isLoadingMember={isLoadingMember}
                                            chatId={chatId}
                                            isAdded={selectedMembers.includes(i._id)}
                                        />
                                    )) : <Typography textAlign={"center"}>No members </Typography>
                            }
                        </Stack>
                    </DialogContent>
                    <Stack direction={"row"} justifyContent={"center"} spacing={"1rem"}>
                        <Button variant='outlined' color='error' onClick={closeHandler}>Cancel</Button>
                        <Button variant='contained' disabled={isLoadingMember} onClick={addMemberHandler} >Save Changes</Button>
                    </Stack>
                </Stack>
            </Dialog>
        </React.Fragment>
    )
}

export default AddMemberDialog
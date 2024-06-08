import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Backdrop, Button, Drawer, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon, Edit as EditIcon, Done as DoneIcon, Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import IconBtn from '../components/iconBtn/headerBtns';
import { useNavigate, useSearchParams } from 'react-router-dom';
import GroupList from '../components/shared/groupList';
import { SampleChat, SampleUser } from '../data';
import UserItem from '../components/shared/userItem';
import Header from '../components/layout/header';

const ConfirmDelete = lazy(() => import('../components/shared/confirmDelete'));
const AddMemberDialog = lazy(() => import('../components/shared/addMember'));



const Group = () => {


  const navigate = useNavigate()
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");



  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const isAddMember = false;

  const chatId = useSearchParams()[0].get("group");

  const handleBackNavigation = () => {
    navigate("/")
  }


  const handleMenu = () => {
    setIsMobileOpen((prev) => !prev)
  }


  const handleMenuClose = () => {
    setIsMobileOpen(false)
  }

  const updateGroupName = () => {
    setIsEdit(false)
    console.log(groupNameUpdatedValue)
  }

  useEffect(() => {
    setGroupName(`KingsMen ${chatId}`)
    setGroupNameUpdatedValue(`KingsMen ${chatId}`)
    return () => {
      setGroupName("")
      setGroupNameUpdatedValue("")
      setIsEdit(false)
    }
  }, [chatId])



  const handleAddMember = () => {
    console.log("running handleAddMember")
  }

  const handleRemoveMember = (id) => {
    console.log("running handleRemoveMember",id)
  }


  const handleDeleteGroup = () => {
    setConfirmDeleteDialog(true)
    console.log("running handleDeleteGroup")
  }


  const closeConfirmDeleteDialog = () => {
    setConfirmDeleteDialog(false)
  }


  const deleteHandler = () => {
    console.log("running deleteHandler")
    closeConfirmDeleteDialog()
  }



  return (
    <>  <Header />
                <Grid container height={"calc(100vh - 4rem)"}>


        {/* Group listing left side start */}

        <Grid item sm={4}
          sx={{
            display: {
              xs: "none",
              sm: "block"
            },
            background: "linear-gradient(135deg, #360940 0%, #F05F57 100%);"
          }}>
          <GroupList myGroups={SampleChat} chatId={chatId} />
        </Grid>
        {/* Group listing left side close */}




        <Grid item xs={12} sm={8} sx={{ display: "flex", flexDirection: "column", position: "relative", padding: "1rem 3rem" }}>


          {/* back button  start */}
          <IconBtn
            title="Back"
            icon={<KeyboardBackspaceIcon />} sx={{ position: "absolute", top: "1rem", left: "1rem" }}
            onClick={handleBackNavigation}
          />
          {/* back button  close */}





          {

            isEdit ?

              <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"1rem"}>
                <TextField value={groupNameUpdatedValue} onChange={(e) => setGroupNameUpdatedValue(e.target.value)} />
                <IconButton onClick={updateGroupName}>
                  <DoneIcon />
                </IconButton>
              </Stack>
              :

              <>
                {chatId &&
                  <>
                    <Stack direction={"row"} spacing={"1rem"} justifyContent={"center"} alignItems={"center"} padding={"1rem"}>
                      <Typography variant='h6'>{groupName} </Typography>
                      <EditIcon onClick={() => setIsEdit(true)} sx={{ cursor: "pointer" }} />
                    </Stack>






                    <Typography variant='h6' padding={"1rem"} textAlign={"start"}>Members </Typography>

                    <Stack
                      width={"100%"}
                      maxWidth={{ xs: "100%", sm: "60%", md: "60%"}}
                      boxSizing={"border-box"}
                      padding={{
                        sm: "1rem",
                        xs: "0"
                      }}
                      margin={"0 auto"}
                      height={"50vh"}
                      overflow={"auto"}
                    >
                      {SampleUser.map((i) => (
                        <UserItem 
                          user={i} 
                          key={i._id} 
                          isAdded 
                          handler={handleRemoveMember} 
                          styling={
                            {
                              padding: "0.5rem",
                              borderRadius: "0.5rem",
                              boxShadow: "0 0 0.7rem 0.1rem rgba(0, 0, 0, 0.2)",
                            }
                          }
                        />
                      ))}


                    </Stack>

                    <Stack direction={{
                      xs: "column-reverse",
                      sm: "row"
                    }}
                      alignItems={"center"} justifyContent={"center"}
                      spacing={"1rem"}
                      p={{
                        xs: 0,
                        sm: "1rem",
                        md: "1rem 3rem"
                      }}
                      mt={"2rem"}
                    >
                      <Button variant='contained' startIcon={<AddIcon />} onClick={handleAddMember}>Add Member</Button>
                      <Button variant='outlined' color='error' startIcon={<DeleteIcon />} onClick={handleDeleteGroup}>Delete Group</Button>
                    </Stack>
                  </>
                }
              </>

          }


          {/*  mobile  menu start */}

          <IconBtn title="Menu" onClick={handleMenu}
            icon={<MenuIcon />} sx={{ display: { xs: "block", sm: "none" }, ":hover": { backgroundColor: "transparent" }, position: "absolute", top: "1rem", right: "1rem" }}
          />

          <Drawer sx={{ display: { xs: "block", sm: "none" } }} open={isMobileOpen} onClose={handleMenuClose}>
            <GroupList mobile={true} w={"60vw"} myGroups={SampleChat} chatId={chatId} />
          </Drawer>

          {/*  mobile  menu  close*/}





          {/* Delete dialog start */}
          {confirmDeleteDialog && (<Suspense fallback={<Backdrop open />}>
            <ConfirmDelete open={confirmDeleteDialog} handleClose={closeConfirmDeleteDialog} deleteHandler={deleteHandler} />
          </Suspense>)}
          {/* Delete dialog close */}


          {/* Add Member dialog start */}
          {isAddMember && (<Suspense fallback={<Backdrop open />}>
            <AddMemberDialog />
          </Suspense>)}
          {/* Add Member close */}



        </Grid>
      </Grid>
    </>
  )
}
export default Group;
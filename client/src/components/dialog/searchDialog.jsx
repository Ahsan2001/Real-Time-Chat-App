import UserItem from '../shared/userItem';
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { SampleUser } from '../../data';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchDialog = () => {
  const [searchPeople, setSearchPeople] = useState("");
  const [users, setUsers] = useState(SampleUser);
  const addFriendHandler = (id) => {
    console.log(id)
  }

  let isLoadingSendFriendRequest = false;

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={searchPeople}
          onChange={(e) => setSearchPeople(e.target.value)}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
       
         <List>
          {
            users.map((i,index) => (
              <UserItem
                key={index}
                user={i}
                handler={addFriendHandler}
                handleIsLoading={isLoadingSendFriendRequest} />
            ))
          }
        </List>

      </Stack>
    </Dialog>
  )
}

export default SearchDialog
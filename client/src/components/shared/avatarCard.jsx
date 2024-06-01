import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transfromImage } from '../../utils'

const AvatarCard = ({avatar=[], max=4 }) => {
  return (
    <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={max}>
            <Box sx={{width: "5rem", height: "3rem"}}>
                {avatar.map((data, index) => {
                    return <Avatar 
                                src={transfromImage(data)} 
                                key={index} 
                                alt={`Avatar ${index}`} 
                                style={{
                                    width: "3rem", 
                                    height: "3rem", 
                                    // borderRadius: "50%",
                                    position: "absolute",
                                    left: {
                                        xs: `${0.5 + index}rem`,
                                        sm: `${index}rem`,
                                    }
                                }} />
                    })}
            </Box>
        </AvatarGroup>
    </Stack>
  )
}

export default AvatarCard
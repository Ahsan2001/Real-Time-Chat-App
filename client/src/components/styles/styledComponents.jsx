import {styled} from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHiddenInput = styled('input')({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
})


export const Link = styled(LinkComponent)({
    color: 'black',
    textDecoration: 'none',
    backgroundColor: '#fff',
    '&:hover': {
        backgroundColor: '#f5f5f5',
    }

})

 
export const InputBox = styled('input')({
    width: '100%',
    height: '40px',
    padding: '0px 3rem',
    border: 'none',
    outline: 'none',
    borderRadius: '1.5rem',
    backgroundColor: '#f5f5f5',
  })
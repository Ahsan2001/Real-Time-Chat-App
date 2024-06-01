import React from 'react'
import { transfromImage } from '../../utils';
import { FileOpen }  from "@mui/icons-material"

const RenderAttachment = (file, url) => {
  switch (file) {
    case "video":
       return <video src={url} preload='none' width={"200px"} controls />
        
    case "video":
       return <audio src={url} preload='none' controls />
        
    case "image":
       return <img src={transfromImage(url,200)} width={"200px"} height={"150px"} alt="attachment" style={{objectFit: "contain"}} />
        
    default:
       return <FileOpen />
        
  }
}

export default RenderAttachment
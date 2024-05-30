import { IconButton, Tooltip } from "@mui/material";

const IconBtn = ({title, icon, onClick, size="large", type="button"}) => {
    return (
    <Tooltip title={title} >
      <IconButton color="inherit" size={size} onClick={onClick} type={type}> 
         {icon}
      </IconButton>
    </Tooltip>
    )
  }


export default IconBtn;
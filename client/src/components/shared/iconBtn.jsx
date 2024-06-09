import { IconButton, Tooltip } from "@mui/material";

const IconBtn = ({title, icon, onClick, size="large", type="button", sx={}}) => {
    return (
    <Tooltip title={title} >
      <IconButton color="inherit" sx={sx} size={size} onClick={onClick} type={type}> 
         {icon}
      </IconButton>
    </Tooltip>
    )
  }


export default IconBtn;
import { Logout } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useDispatch, useSelector} from "react-redux"
import { logOut } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors";

export default function NavbarUser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };
    
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant="h7" component="p" sx={{ flexGrow: 1 }}>
         {`Welcome, ${user.name}`}
      </Typography>
        <Tooltip title="Logout">
          <IconButton
            onClick={onLogout}
            size="small"
            sx={{ ml: 4 }}
            color="inherit"
          >
          <Logout fontSize="small" />
          </IconButton>
        </Tooltip>
    </Box>
  )
};



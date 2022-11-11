import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { Divider, ListItemIcon } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
// My Component 
import { useAuth } from 'shared/hooks/useAuth';
import NavbarUser from 'components/Navbar/NavbarUser/NavbarUser';

export default function MenuAppBar() {
  const isUserLogin = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: 'rgba(117, 190, 218, 0.5)'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneBook
          </Typography>
          {!isUserLogin ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                 <MenuItem onClick={handleClose}>
                   <ListItemIcon>
                     <PersonAdd fontSize="small" />
                   </ListItemIcon>
                   <NavLink to="/register">Sign Up</NavLink>
                 </MenuItem>
                 <Divider />
                 <MenuItem onClick={handleClose}>
                   <ListItemIcon>
                     <LoginIcon fontSize="small" />
                   </ListItemIcon>
                   <NavLink to="/login">Sign In</NavLink>
                 </MenuItem>
               </Menu>
            </div>
          ) 
        : <NavbarUser/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
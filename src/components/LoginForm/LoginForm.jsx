// MUI
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// My component
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { selectAuth } from 'redux/auth/authSelectors';
import LoadingBtn from 'shared/button/LoadingButton';


export default function SignInSide() {
  const { loading } = useSelector(selectAuth);
  const dispatch = useDispatch();
 
  const handleSubmit = (event) => {
    event.preventDefault();
      const data = new FormData(event.currentTarget);
      const form = event.currentTarget;
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    dispatch(
         logIn({
             email: data.get('email'),
             password: data.get('password'),
         })
        );
        form.reset();
  };

  return (
           <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
      {!loading ? <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3, mb: 2,
                }}
              >
                Sign In
              </Button> : 
              <LoadingBtn/>       
            }
              {/* <Copyright sx={{ mt: 5 }} />  */}
            </Box>
  );
}


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
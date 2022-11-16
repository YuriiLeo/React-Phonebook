import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// My Component
import { useDispatch, useSelector } from 'react-redux'
import { signup } from 'redux/auth/authOperations';
import { selectAuth } from 'redux/auth/authSelectors';
import LoadingBtn from 'shared/button/LoadingButton';

export default function SignUp() {
  const { loading } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
    });
      const form = event.currentTarget;
      dispatch(
          signup({
              name: data.get('name'),
              email: data.get('email'),
              password: data.get('password'),
          })
        );
        form.reset();
  };

  return (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
               <TextField
                margin="normal"
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                />              
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
                autoComplete="new-password"
              />
          {!loading ? <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Register
              </Button> :
              <LoadingBtn />
             }
    </Box>
  );
}
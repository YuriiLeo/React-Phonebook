import { Avatar, Box, createTheme, CssBaseline, Grid, Link, ThemeProvider, Typography } from '@mui/material'
import LoginForm from 'components/LoginForm/LoginForm';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import React from 'react';
import logIn from '../../shared/img/logIn.jpg';


const theme = createTheme();

export default function LoginPage() {

  return (
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${logIn})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{
              m: 1,
              bgcolor: 'rgba(117, 190, 218, 0.5)'
            }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
                <LoginForm />
                <Grid item>
                  <Link href="/goit-react-hw-08-phonebook/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

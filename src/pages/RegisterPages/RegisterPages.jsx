import { Avatar, Box, createTheme, CssBaseline, Grid, Link, Paper, ThemeProvider, Typography } from '@mui/material'
import RergisterForm from 'components/RergisterForm/RergisterForm'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import logIn from '../../shared/img/logIn.jpg';

const theme = createTheme();

export default function RegisterPages() {

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
            <Avatar sx={{ m: 1, bgcolor: 'rgba(117, 190, 218, 0.5)' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
              <RergisterForm />
              <Grid item>
                  <Link href="/goit-react-hw-08-phonebook/login" variant="body2">
                    {"Do you have an account? Sign In"}
                  </Link>
              </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

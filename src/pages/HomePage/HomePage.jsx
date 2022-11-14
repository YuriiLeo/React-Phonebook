// MUI
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import homeImg from '../../shared/img/homePage.jpg';
import ImageButton from 'shared/button/ImageButton';

const theme = createTheme();

export default function HomePage() {  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          <Grid container component="div"
          xs={12}
          // sm={4}
          md={12}
          sx={{
            backgroundImage: `url(${homeImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            minHeight: '500px',
            maxHeight: '1500px',
           }}
          >
          <Container fixed sx={{ display: 'flex',
             flexDirection: 'column',
             justifyContent: 'space-evenly',
             alignItems: 'center'}}>
            <Typography component="h1" variant="h3" sx={{
              color: "#fff",
              marginTop: 20,
              backgroundColor: 'rgba(117, 190, 218, 0.5)',
              // opacity: 0.4,
              // backgroundColor: '#000',
              textAlign: 'center',
            }}>
              To access contacts, enter your login or register on the site
            </Typography>
              <ImageButton to={'/register'} title={'Register'}/>
      </Container>
    </Grid>
  </Grid>
</ThemeProvider>
  )
}

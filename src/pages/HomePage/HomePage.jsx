// MUI
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

export default function HomePage() {

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
          <Grid container component="div"
          xs={12}
          // sm={4}
          md={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
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
                <Box sx={{ display: 'flex', flexWrap: 'wrap',  width: "145px", height: "70px"  }}>
                  <ImageButton
                     focusRipple
                     key={'REGISTER'}
                     style={{
                       width: '100%',
                      height: '100%' ,
                     }}
                >
                  <NavLink to="/register">
                     <ImageBackdrop className="MuiImageBackdrop-root" sx={{backgroundColor: 'transparent'}} />
                        <Image>
                          <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                              position: 'relative',
                              p: 6,
                              pt: 2,
                              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                          >
                            Register
                           <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                     </Image>
                  </NavLink>
              </ImageButton>
        </Box>
      </Container>
    </Grid>
  </Grid>
</ThemeProvider>
  )
}

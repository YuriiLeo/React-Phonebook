// MUI
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { height } from '@mui/system';

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

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

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
    // <div>To access contacts, enter your login or register on the site</div>
        <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid container component="div"
          xs={12}
          // sm={4}
          md={12}
          sx={{
            backgroundImage: 'url(https://pixabay.com/get/gbc6345c11e19f8d61cf1dcc619bd0804022e80f5e9390c2030688257ae113a3b1b79c267de7dd8cbfec553ae8869b875ebfe2663308c73d541763f4fbc586cb0_1280.jpg)',
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
              opacity: 0.4,
              backgroundColor: '#000',
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
          {/* <ImageSrc style={{ backgroundImage: `url(https://pixabay.com/get/gbc6345c11e19f8d61cf1dcc619bd0804022e80f5e9390c2030688257ae113a3b1b79c267de7dd8cbfec553ae8869b875ebfe2663308c73d541763f4fbc586cb0_1280.jpg)` }} /> */}
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
              {'REGISTER'}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
    </Box>
            {/* <TextField >To access contacts, enter your login or register on the site</TextField> */}
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
      </Container>
        {/* <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          <React.Fragment>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/goit-react-hw-08-phonebook/register"
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
          </Box>
          </Grid> */}
          </Grid>
      </Grid>

    </ThemeProvider>
  )
}

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import ButtonBase from '@mui/material/ButtonBase';
// import Typography from '@mui/material/Typography';

// const images = [
//   {
//     url: '/static/images/buttons/breakfast.jpg',
//     title: 'Breakfast',
//     width: '100%',
//   },
//   {
//     url: '/static/images/buttons/burgers.jpg',
//     title: 'Burgers',
//     width: '30%',
//   },
//   {
//     url: '/static/images/buttons/camera.jpg',
//     title: 'Camera',
//     width: '30%',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 200,
//   [theme.breakpoints.down('sm')]: {
//     width: '100% !important', // Overrides inline-style
//     height: 100,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 3,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// export default function ButtonBases() {
//   return (
//     <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
//         <ImageButton
//           focusRipple
//           key={'Breakfast'}
//           style={{
//             width: '100%',
//           }}
//         >
//           <ImageSrc style={{ backgroundImage: `url(https://pixabay.com/get/gbc6345c11e19f8d61cf1dcc619bd0804022e80f5e9390c2030688257ae113a3b1b79c267de7dd8cbfec553ae8869b875ebfe2663308c73d541763f4fbc586cb0_1280.jpg)` }} />
//           <ImageBackdrop className="MuiImageBackdrop-root" />
//           <Image>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               sx={{
//                 position: 'relative',
//                 p: 4,
//                 pt: 2,
//                 pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
//               }}
//             >
//               {'Breakfast'}
//               <ImageMarked className="MuiImageMarked-root" />
//             </Typography>
//           </Image>
//         </ImageButton>
//     </Box>
//   );
// }

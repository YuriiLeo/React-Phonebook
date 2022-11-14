import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { NavLink } from 'react-router-dom';

const theme = createTheme();

export default function ImageButton({to, title}) {

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap',  width: "145px", height: "70px"  }}>
            <ImageButton
                     focusRipple
                     key={'REGISTER'}
                     style={{
                       width: '100%',
                      height: '100%' ,
                     }}
                   >
                  <NavLink to={to}>
                     <ImageBackdrop className="MuiImageBackdrop-root" sx={{backgroundColor: 'transparent'}} />
                        <Image>
                          <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            sx={{
                              position: 'relative',
                              pl: 3,
                              pr: 3,
                              pt: 2,
                              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                              mt: 3,
                            }}
                          >
                            {title}
                           <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                     </Image>
                  </NavLink>
            </ImageButton>
        </Box>
    </ThemeProvider>
  )
}

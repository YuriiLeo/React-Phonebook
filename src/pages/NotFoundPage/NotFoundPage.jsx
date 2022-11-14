import { Box, Typography } from '@mui/material';
import React from 'react';
import { MdOutlineSentimentDissatisfied } from 'react-icons/md';
import ImageButton from 'shared/button/ImageButton';

export default function NotFoundPage() {
  return (
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minWidth: 300, width: '100vw', height: '50vh',  backgroundColor: '#008276' }}>
      <Typography
          component="h1"
          variant="h3"
          color="#f2f1f1"
          sx={{
          m: 2,
         }}>
        Not Found Page</Typography>
        <MdOutlineSentimentDissatisfied size="80"/>
        <ImageButton to={'/'} title={'Home page'} />
      </Box>
  )
}

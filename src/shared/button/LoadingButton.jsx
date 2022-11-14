import React from 'react';
// import LoadingButton from 
import {Button} from '@mui/material';



export default function LoadingBtn() {
  return (
       <Button
        type="submit"
        fullWidth
        variant="contained"
         disabled
        sx={{
          mt: 3, mb: 2,
        }}
      >
        Loading...
      </Button>
  )
}

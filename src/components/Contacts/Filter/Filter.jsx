import React from 'react';
import { nanoid } from 'nanoid';
import { selectFilter } from 'redux/filter/filterSelectors';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from 'redux/filter/filterSlice';
import { Box, CssBaseline, Grid, Paper, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();    
  const filterId = nanoid();
  
  const theme = createTheme();
    
  const handleChange = (evt) => {
      const { value } = evt.target;
      dispatch(setFilter(value));
    }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="div" >
        <CssBaseline />
          <Grid item
            borderRadius={1}
            xs={12}
            component={Paper}
            elevation={6} square
            sx={{
              my: 5,
              mx: 5,
            }}>
          <Box
             sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }} >
              <TextField
              size="small"
              required
              label="Search contacts"
              id={filterId}
              type="text"
              name="filter"
              onChange={handleChange}
              value={filter}
              sx={{ margin: "7px" }} />         
           </Box>
        </Grid>
      </Grid>
   </ThemeProvider>
    )
}

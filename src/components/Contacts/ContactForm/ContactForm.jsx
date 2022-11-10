import PropTypes from 'prop-types';
// import { Form, Input } from './ContactForm.styled';
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contactsOperetions'; 
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
import { Accordion, AccordionDetails, AccordionSummary, SpeedDial, SpeedDialIcon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function ContactForm() {
const [name, setName] = useState("");
const [number, setNumber] = useState("");

const dispatch = useDispatch();

const nameId = nanoid();
const numberId = nanoid();


const handleChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
       case 'number':
        setNumber(value);
        break;
    
      default:
        return;
    }
  }
  
const handleSubmit = (evt) => {
  evt.preventDefault();
      onAddContact({ name, number });
      setName("");
      setNumber("");
    }


const onAddContact = (contact) => {
  const action = addContact(contact);
      console.log("contact", contact);

      dispatch(action);
}
  
  return (
    <>
    {/* <Form onSubmit={handleSubmit}>
         <label htmlFor={nameId}>Name</label>
         <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
         <label htmlFor={numberId}>Number</label>
         <Input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
       />  
         <Button type="sybmit">Add contact</Button>
      </Form> */}
      
        <ThemeProvider theme={theme}>
      <Grid container component="div"  sx={{marginTop: '30px'}} >
        <CssBaseline />
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://pixabay.com/get/gae5f76ebbaa34b884f62098e61d78f9175edc226d9288da0043abb8d79be5587ebe83a50781a844ddbd70ed3831ba91ecb4204a096197b93cc7db0f6c0144dfc_1280.jpg)',
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid> */}
        
               <Grid item borderRadius={1} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              // my: 4,
              // mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Create New Contact</Typography>
                </AccordionSummary>
                {/* <SpeedDial
                  aria-controls="panel1a-content"
          id="panel1a-header"
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        expandIcon={<SpeedDialIcon />}
      >
 
      </SpeedDial> */}
        <AccordionDetails>
<Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  size="small"
                required
                fullWidth
                id={nameId}
                label="Name"
                name="name"
                // autoComplete="name"
                // autoFocus
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleChange}
              />
              <TextField
                  margin="normal"
                  size="small"
                required
                fullWidth
                id={numberId}
                name="number"
                label="Number"
                type="tel"
                // autoComplete="current-password"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                // fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Add contact
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} /> */}
            </Box>
        </AccordionDetails>
      </Accordion>
            {/* <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  size="small"
                required
                fullWidth
                id={nameId}
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. 
                For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={name}
                onChange={handleChange}
              />
              <TextField
                  margin="normal"
                  size="small"
                required
                fullWidth
                id={numberId}
                name="number"
                label="Number"
                type="tel"
                // autoComplete="current-password"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
              /> */}
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              {/* <Button
                type="submit"
                // fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Add contact
              </Button> */}
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} /> */}
            {/* </Box> */}
          </Box>
          </Grid>
          </Grid>
      </ThemeProvider>
      </>
  )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
}
// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { addContact } from 'redux/contacts/contactsOperetions'; 
// MUI
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
     <ThemeProvider theme={theme}>
      <Grid container component="div"  sx={{marginTop: '30px'}} >
        <CssBaseline />
          <Grid item borderRadius={1} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Accordion>
              <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
              <Typography>Create New Contact</Typography>
              </AccordionSummary>
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
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Add contact
              </Button>
                </Box>
              </AccordionDetails>
           </Accordion>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

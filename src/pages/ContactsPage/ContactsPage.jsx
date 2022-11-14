import React from 'react';
import ContactForm from 'components/Contacts/ContactForm/ContactForm';
import Contacts from "components/Contacts/Contacts"; 
import { ToastContainer } from 'react-toastify';
import { Container, CssBaseline, Grid } from "@mui/material";
import contactsImg from '../../shared/img/contactsPage.jpg';

export default function ContactsPage() {

  return (
      <React.Fragment>
        <CssBaseline />
          <Grid container component="div"
          xs={12}
          sx={{
            backgroundImage: `url(${contactsImg})`,
            backgroundRepeat: '#5858f4',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // height: '100vh',
            minHeight: '500px',
            maxHeight: '1500px',
          }}
        >
          <Container fixed
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(117, 190, 218, 0.5)',
            marginTop: 8,
            height: '90%',
          }}>
            <ContactForm/>
            <ToastContainer position="top-left" autoClose={3000} />
            <Contacts />
          </Container>
       </Grid>
    </React.Fragment>
  )
}


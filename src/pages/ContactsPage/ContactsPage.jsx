import React from 'react';
import ContactForm from 'components/Contacts/ContactForm/ContactForm';
import Contacts from "components/Contacts/Contacts"; 
import { ToastContainer } from 'react-toastify';
import { Container, CssBaseline, Grid } from "@mui/material";

export default function ContactsPage() {

  return (
      <React.Fragment>
        <CssBaseline />
          <Grid container component="div"
          xs={12}
          md={12}
          sx={{
            backgroundImage: 'url(https://pixabay.com/get/g933f89eb74bbf7c0a7a9ec8d5cfd023427203e0da3e6cb11375e7ecb72ffaee1221c8118fadc9896d0ce190747524a180f52d5a336b507a860ad873b016953e3_1280.jpg)',
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
          <Container fixed
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(117, 190, 218, 0.5)',
            marginTop: 8,
          }}>
            <ContactForm/>
            <ToastContainer position="top-left" autoClose={3000} />
            <Contacts />
          </Container>
       </Grid>
    </React.Fragment>
  )
}


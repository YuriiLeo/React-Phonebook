import ContactList from 'components/Contacts/ContactList/ContactList';
import Filter from 'components/Contacts/Filter/Filter';
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { selectContacts} from 'redux/contacts/contactsSelectors';
import { selectFilter, selectFilterdContacts } from 'redux/filter/filterSelectors';
import { fetchContacts } from "redux/contacts/contactsOperetions";
import { useEffect } from "react";
// import { Wrapper } from './Contacts.styled';
import { Box, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Contacts() {
  const contacts = useSelector(selectFilterdContacts);
  const { isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();    
const theme = createTheme();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
      

  return (
               <ThemeProvider theme={theme}>
      <Grid container  component="div">
        <CssBaseline />
     {/* <Grid item borderRadius={1} xs={12} sm={8} md={5} component={Paper} elevation={6} square> */}
    <Box
            sx={{
              my: 8,
              // mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
      >
                {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
            <Typography component="h1" variant="h5">
              Contacts
        </Typography>
        
          {/* <Section title="Contacts"> */}
              <Filter />
              <ContactList items={contacts}  />
           {/* </Section>  */}
      {filter && !contacts.length && <Notification message="No contact on request"></Notification>}
      </Box>
        </Grid>
              {/* </Grid> */}
        </ThemeProvider>
  )
}

        {/* {!isLoading ?
         <Section title="Contacts">
           <Filter />
            <ContactList items={contacts}  />
        </Section> :
       (filter.length > 0 ? null : <Notification message="There is no contacts"></Notification>)
  } */}
    
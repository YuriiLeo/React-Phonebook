import ContactList from 'components/Contacts/ContactList/ContactList';
import Filter from 'components/Contacts/Filter/Filter';
import Notification from "components/Notification/Notification";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { selectContacts} from 'redux/contacts/contactsSelectors';
import { selectFilter, selectFilterdContacts } from 'redux/filter/filterSelectors';
import { fetchContacts } from "redux/contacts/contactsOperetions";
import { useEffect } from "react";
// import { Wrapper } from './Contacts.styled';
import { Box, CssBaseline, Grid, Typography } from '@mui/material';
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
               <Filter />
                 <ContactList items={contacts}  />
           {filter && !contacts.length && <Notification message="No contact on request"></Notification>}
           </Box>
        </Grid>
     </ThemeProvider>
  )
}

    
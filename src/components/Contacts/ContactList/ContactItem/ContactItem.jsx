import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperetions';
import { setFilter } from 'redux/filter/filterSlice';
import { toast } from 'react-toastify';
import { selectFilterdContacts } from 'redux/filter/filterSelectors';
import { Box, Divider, IconButton, ListItem } from '@mui/material';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ContactItem({ id, name, phone }) {  
  const contacts = useSelector(selectFilterdContacts);
  const { isLoading } = useSelector(selectContacts);
  const dispatch = useDispatch();    

    const removeContact = (id) => {
    const action = deleteContact(id);
    dispatch(action);

    if (contacts.length === 1) {
           dispatch(setFilter(""));
           
        toast.info('No more contacts.', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       });
      }   
    }  
    
  return (
    <>
      <ListItem key={id} sx={{
        px: 0,
        justifyContent: 'space-between}',
      }}>
        <IconButton href="tel:+380937744581">
           <ContactPhoneOutlinedIcon size={18}/>
        </IconButton>
        <Box sx={{ marginLeft: '20px'}}>
            <span>{name}: </span>
            <span>{phone}</span>
       </Box> 
          <IconButton size="large" aria-label="delete" type='button' disabled={isLoading} onClick={() => removeContact(id)} >
            <DeleteIcon fontSize='small' />
          </IconButton>
      </ListItem>
        <Divider />
      </>
  )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
}
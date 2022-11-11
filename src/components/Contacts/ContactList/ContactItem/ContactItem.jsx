import PropTypes from 'prop-types';
import { Wrapper, Item } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperetions';
import { setFilter } from 'redux/filter/filterSlice';
import { toast } from 'react-toastify';
import { selectFilterdContacts } from 'redux/filter/filterSelectors';
import { Divider, IconButton } from '@mui/material';
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
    <Item key={id}>
        <ContactPhoneOutlinedIcon size={18}/>
        <Wrapper>
            <span>{name}: </span>
            <span>{phone}</span>
       </Wrapper> 
            {/* <Button type='button' onClick={() => removeContact(id)} >Delete</Button> */}
      {/* {isLoading ? <Button>Deleting...</Button> : <Button type='button' onClick={() => removeContact(id)} >Delete</Button>} */}
            {/* <Button type='button' disabled={isLoading} onClick={() => removeContact(id)} >Delete</Button> */}
            {/* <Button size="small" variant="outlined" startIcon={<DeleteIcon />} type='button' disabled={isLoading} onClick={() => removeContact(id)} /> */}
     <IconButton size="large" aria-label="delete" type='button' disabled={isLoading} onClick={() => removeContact(id)} >
  <DeleteIcon fontSize='small' />
</IconButton>
      </Item>
      {/* <Stack direction="row" spacing={1}> */}
      {/* <Chip label="Deletable" onDelete={handleDelete} /> */}
      {/* <Chip label={`${name}: ${phone}`} variant="outlined" onDelete={() => removeContact(id)} />
      </Stack> */}
      
            <Divider />
      </>
  )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
}
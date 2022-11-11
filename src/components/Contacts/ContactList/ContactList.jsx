import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import ContactItem from 'components/Contacts/ContactList/ContactItem/ContactItem';

export default function ContactList({ items }) {
  return (
    <List>
      {
        items.map(({ name, number, id }) => (
          <ContactItem key={id} id={id} name={name} phone={number} />
        ))}
    </List>
  );
};


ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
  })),
}

import React from 'react';
import { Container } from "components/App/App.styled";
import ContactForm from 'components/ContactForm/ContactForm';
import Section from "components/Section/Section";
import Contacts from "components/Contacts/Contacts"; 
import { ToastContainer } from 'react-toastify';

export default function ContactsPage() {
  return (
      <Container>
        <Section title="Phonebook">
          <ContactForm  />
        </Section>
          <ToastContainer position="top-left" autoClose={3000} />
          <Contacts />
      </Container>
  )
}

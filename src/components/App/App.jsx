// import { Container } from "./App.styled";
// import ContactForm from 'components/ContactForm/ContactForm';
// import Section from "components/Section/Section";
// import Contacts from "components/Contacts/Contacts"; 
// import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPages from "pages/RegisterPages/RegisterPages";
import SharedLayout from "components/SharedLayout/SharedLayout";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

export default function App() {
 
  return (
    // <Container>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<ContactsPage/> } />
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPages />} />
          <Route path="*" element={<NotFoundPage/>}/>
          {/* <Route path="" element={}/> */}
        </Route>
      </Routes>
          /* <Section title="Phonebook">
            <ContactForm  />
          </Section>
          <ToastContainer position="top-left" autoClose={3000} />
          <Contacts/> */
    // </Container>
  )
}
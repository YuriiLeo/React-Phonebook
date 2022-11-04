// import { Container } from "./App.styled";
// import ContactForm from 'components/ContactForm/ContactForm';
// import Section from "components/Section/Section";
// import Contacts from "components/Contacts/Contacts"; 
// import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom";
// import ContactsPage from "pages/ContactsPage/ContactsPage";
// import LoginPage from "pages/LoginPage/LoginPage";
// import RegisterPages from "pages/RegisterPages/RegisterPages";
import SharedLayout from "components/SharedLayout/SharedLayout";
// import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
// import HomePage from "pages/HomePage/HomePage";
import { lazy } from "react";
import { current } from "redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PublicRoute from "components/PublicRoute/PublicRoute";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { SelectIsLoadingUserStatus } from "redux/auth/auth-selectors";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPages = lazy(() => import('../../pages/RegisterPages/RegisterPages'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(SelectIsLoadingUserStatus);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

 
  return (
    // <Container>
    <>
    {isLoadingUser ? <p>Loading...</p> : 
    <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute/>}>
           <Route path="/register" element={<RegisterPages />} />
           <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute/>}>
            <Route path="/contacts" element={<ContactsPage />} />
        </Route>
          <Route path="*" element={<NotFoundPage/>}/>
          {/* <Route path="" element={}/> */}
        </Route>
    </Routes>
   }
  </>
          /* <Section title="Phonebook">
            <ContactForm  />
          </Section>
          <ToastContainer position="top-left" autoClose={3000} />
          <Contacts/> */
    // </Container>
  )
}
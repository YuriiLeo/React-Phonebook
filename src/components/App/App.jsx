import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { lazy } from "react";
import { current } from "redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PublicRoute from "components/PublicRoute/PublicRoute";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import { SelectIsLoadingUserStatus } from "redux/auth/authSelectors";
// import { Box, Container, CssBaseline, Typography } from "@mui/material";

import Loading from "components/Loading/Loading";

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
 <>
        {isLoadingUser ? <Loading /> :
            <Routes>
          <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute />}>
                  <Route path="/register" element={<RegisterPages />} />
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />

              </Route>
            </Routes>
        } 
    </>
    
    // <Routes>
    //     <Route path="/" element={<SharedLayout/>}>
    //     <Route index element={<HomePage />} />
    //     <Route element={<PublicRoute/>}>
    //        <Route path="/register" element={<RegisterPages />} />
    //        <Route path="/login" element={<LoginPage />} />
    //     </Route>
    //     <Route element={<PrivateRoute/>}>
    //         <Route path="/contacts" element={<ContactsPage />} />
    //     </Route>
    //       <Route path="*" element={<NotFoundPage/>}/>
    //     </Route>
    // </Routes>

  )
}
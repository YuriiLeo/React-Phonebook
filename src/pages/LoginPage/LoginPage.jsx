import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

export default function LoginPage() {
    // const isUserLogin = useAuth();

  return (
  // <>
  //   { !isUserLogin ?
      <div>
      <h1>LoginPage</h1>
      <LoginForm/>
    </div > 
  //   : <Navigate to={"/contacts"} />
  //     }
  // </>
  )
}

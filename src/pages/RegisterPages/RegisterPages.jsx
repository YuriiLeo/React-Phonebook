import RergisterForm from 'components/RergisterForm/RergisterForm'
import { Navigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

export default function RegisterPages() {
  // const isUserLogin = useAuth();

  return (
  // <>
  //   { !isUserLogin ?
      <div>
      <h1>RegisterPages</h1>
      <RergisterForm />
    </div > 
  //   : <Navigate to={"/contacts"} />
  //     }
  // </>
  )
}

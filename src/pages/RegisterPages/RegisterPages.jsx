import RergisterForm from 'components/RergisterForm/RergisterForm'
// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'shared/hooks/useAuth';

export default function RegisterPages() {
  // const isUserLogin = useAuth();

  return (
  // <>
  //   { !isUserLogin ?
    <div>
      <RergisterForm />
    </div > 
  //   : <Navigate to={"/contacts"} />
  //     }
  // </>
  )
}

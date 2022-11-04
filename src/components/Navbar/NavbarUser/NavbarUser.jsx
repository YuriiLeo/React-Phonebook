import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector} from "react-redux"
import { logOut } from "redux/auth/auth-operations";
import { selectUser } from "redux/auth/auth-selectors";


export default function NavbarUser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  // console.log(selectUser);
  


  const onLogout = () => {
    dispatch(logOut());
  };
    
  return (
    <div>
      <p>{`Welcome, ${user.name}`}</p>
      {/* <TbLogout size={18}/> */}
        <button onClick={onLogout}><TbLogout size={18}/> Logout</button>
    </div>
  )
};



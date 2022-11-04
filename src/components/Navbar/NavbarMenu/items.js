import { nanoid } from "nanoid";
import { MdOutlineRealEstateAgent, MdOutlineContactPhone  } from "react-icons/md";

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        icon: MdOutlineRealEstateAgent,
    },
    // {
    //     id: nanoid(),
    //     to: "/login",
    //     text: "Login",
    //     icon: MdOutlineLiveTv,
    // }, 
    //    {
    //     id: nanoid(),
    //     to: "/register",
    //     text: "Register",
    //     icon: MdOutlineLiveTv,
    // },
           {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts",
        icon: MdOutlineContactPhone,
    },    
]

export default items;
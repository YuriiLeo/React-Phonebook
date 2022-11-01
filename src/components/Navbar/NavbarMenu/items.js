import { nanoid } from "nanoid";
import { MdOutlineRealEstateAgent, MdOutlineLiveTv  } from "react-icons/md";

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Contacts",
        icon: MdOutlineRealEstateAgent,
    },
    {
        id: nanoid(),
        to: "/login",
        text: "Login",
        icon: MdOutlineLiveTv,
    }, 
       {
        id: nanoid(),
        to: "/register",
        text: "Register",
        icon: MdOutlineLiveTv,
    }, 
]

export default items;
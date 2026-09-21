import { createContext } from "react";

export const UserContext = createContext();

const ContextProvide = (props) =>{

    const user = {
        id : 12,
        FullName : "Soni Sharma"
    }
    return(
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )

}

export default ContextProvide;
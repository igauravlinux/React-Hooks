import { createContext } from "react";

export const AppContext = createContext();

const ContextProvide = (props) =>{

    const phone = "8825364028";
    const name = "Gaurav Kumar";

    return (
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvide;
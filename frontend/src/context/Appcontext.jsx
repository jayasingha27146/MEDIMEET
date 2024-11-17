import { createContext, useContext } from "react";
import { doctors } from "../assets/assets";

export const appcontext = createContext();

const AppContextProvider = (props) => {

   const currencysymbol = '$';


    const value = {
        doctors,
        currencysymbol
    };

    return (
        <appcontext.Provider value={value}>
            {props.children}
        </appcontext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(appcontext);
};

export default AppContextProvider;
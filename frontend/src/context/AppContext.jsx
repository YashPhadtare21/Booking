import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const url = "https://booking-1-94bc.onrender.com/";
    const currencySymbol = "$";

    const value = {
        doctors,
        currencySymbol,
        url,  // Added url to context
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

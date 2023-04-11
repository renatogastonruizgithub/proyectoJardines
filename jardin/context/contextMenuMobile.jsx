import { createContext, useContext, useState } from "react";



export const menuMobile = createContext();

export const useMobile = () => {
    return useContext(menuMobile);
};

export const MenuMobileProvider = ({ children }) => {

    const [mobileOpen, setMobileOpen] = useState(false);





    return <menuMobile.Provider value={{ mobileOpen, setMobileOpen }}>{children}</menuMobile.Provider>;
};


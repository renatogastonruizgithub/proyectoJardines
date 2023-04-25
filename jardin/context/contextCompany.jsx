import { createContext, useContext, useState } from "react";
import instance from "../config/axios/instance";


export const Company = createContext();

export const useCompany = () => {
    return useContext(Company);
};

export const CompanyProvider = ({ children }) => {

    const [company, setCompany] = useState([]);

    const get = () => {
        instance.get(`company/` + 1)
            .then((res) => {
                setCompany([res.data])

            })
            .catch((error) => {
                console.log(error)
            })
    }




    return <Company.Provider value={{ company, get }}>{children}</Company.Provider>;
};


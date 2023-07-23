import { createContext, useContext, useState } from "react";

import { api } from "../config/axios/instance";
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"
import Swal from 'sweetalert2';

export const publish = createContext();

export const usePublishs = () => {
    return useContext(publish);
};

export const PublicationProvider = ({ children }) => {


    const [loading, setLoading] = useState();
    const [publish, setPublish] = useState([]);

    const getAll = () => {
        setLoading(true)
        api.get(`publication/all`)
            .then((res) => {
                setPublish(res.data)
                console.log(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }




    return <publish.Provider value={{ getAll, publish }}>{children}</publish.Provider>;
};

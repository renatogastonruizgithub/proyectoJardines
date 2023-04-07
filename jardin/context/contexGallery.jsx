import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { alertConfirmation, alertError } from "../components/alert";



export const contextApi = createContext();

export const useGallery = () => {
    return useContext(contextApi);
};

export const ProviderComponentGallery = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);

    const [CurrentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState();

    const handleChangePage = (value) => {
        setCurrentPage(value - 1);
        setLoading(true)
    };



    const getImages = async () => {
        const results = await axios.get(`https://proyecto-jardin.fly.dev/gallery/page?page=${CurrentPage}`).then((res) => {

            setLoading(false)
            setItemData(res.data.content)
            setTotalPages(res.data.totalPages)

        }).catch((error) => {
            console.log(error)
        });

    }


    const handleDeleted = async (id) => {

        await axios.delete(`https://proyecto-jardin.fly.dev/gallery/${id}`).then((res) => {

            setLoading(false)
            alertConfirmation("Borrado con exito")
        }).catch((error) => {
            console.log(error)
            setLoading(false)
            alertError("UPS", "error inesperado!")
        });
    }






    return <contextApi.Provider value={{ loading, itemData, CurrentPage, totalPages, handleChangePage, handleDeleted, getImages }}>{children}</contextApi.Provider>;
};


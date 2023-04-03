import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";



export const contextApi = createContext();

export const useGallery = () => {
    return useContext(contextApi);
};

export const ProviderComponentGallery = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);

    const [CurrentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState();

    const handleChange = (e, value) => {
        setCurrentPage(value - 1);
        setLoading(true)
    };

    useEffect(() => {
        const imgs = async () => {
            const results = await axios.get(`https://proyecto-jardin.fly.dev/gallery/page?page=${CurrentPage}`).then((res) => {
                /*  setTimeout(() => setLoading(false), 500) */
                setLoading(false)
                setItemData(res.data.content)
                setTotalPages(res.data.totalPages)

            }).catch((error) => {
                console.log(error)
            });
            return results
        }

        imgs()

    }, [CurrentPage], [itemData], [totalPages]);







    return <contextApi.Provider value={{ itemData, CurrentPage, totalPages, handleChange }}>{children}</contextApi.Provider>;
};


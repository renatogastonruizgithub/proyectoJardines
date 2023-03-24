import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../components/loading";


export const contextApi = createContext();

export const usePortfolio = () => {
    return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {

    const [empresa, setEmpresa] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        axios.get("http://localhost:8080/empresa/all").then((res) => {
            setEmpresa(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error)
        });


    }, [setEmpresa], [loading]);



    return <contextApi.Provider value={{ empresa, loading }}>{loading && <Loading />}{children}</contextApi.Provider>;
};

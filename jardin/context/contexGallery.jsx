import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { alertConfirmation, alertError } from "../components/alert";



export const galleryContext = createContext();

/* export const useGallery = () => {
    return useContext(contextApi);
};
 */
export const ProviderComponentGallery = ({ children }) => {

    /*  const [loading, setLoading] = useState();
     const [data, setdata] = useState([]);
 
     const [CurrentPage, setCurrentPage] = useState(0);
     const [totalPages, setTotalPages] = useState();
 
     const handleChangePage = (e) => {
         setCurrentPage(e - 1);
         console.log(e - 1)
         setLoading(true)
     };
  
 
     useEffect(() => {
         const imgs = async () => {
             const results = await axios.get(`https://proyecto-jardin.fly.dev/gallery/page?page=0`).then((res) => {
 
 
                 setdata(res.data.content)
                 setTotalPages(res.data.totalPages)
 
             }).catch((error) => {
                 console.log(error)
             });
             return results
         }
 
         imgs()
     },)
 
     console.log(data)
 
     const getPage = () => {
         axios.get(`https://proyecto-jardin.fly.dev/gallery/page?page=0`).then((res) => {
 
             setLoading(false)
             setItemData([res.data.content])
             setTotalPages(res.data.totalPages)
 
         }).catch((error) => {
             console.log(error)
         });
 
     }
 
     const changePage = (page) => {
         axios.get(`https://proyecto-jardin.fly.dev/gallery/page?page=${page}`)
             .then((res) => {
                 setLoading(false)
                 setItemData(res.data.content)
                 setTotalPages(res.data.totalPages)
 
             }).catch((error) => {
                 console.log(error)
             });
     }
 
 
     const handleDeleted = async (id) => {
         setLoading(true)
         await axios.delete(`https://proyecto-jardin.fly.dev/gallery/${id}`).then((res) => {
 
             setLoading(false)
             alertConfirmation("Borrado con exito")
 
 
         }).catch((error) => {
             console.log(error)
             setLoading(false)
             alertError("UPS", "error inesperado!")
         });
 
     }
 
 
 


 */
    return
    {/* <galleryContext.Provider value={{ loading, data, CurrentPage, getPage, totalPages, handleDeleted, changePage }}>{children}</galleryContext.Provider>; */ }
};


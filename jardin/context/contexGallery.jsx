import { createContext, useContext, useState } from "react"
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"
import { api } from "../config/axios/instance"
import Swal from 'sweetalert2';

export const galleryContext = createContext();

export const useGallery = () => {
    return useContext(galleryContext);
};

export const ProviderComponentGallery = ({ children }) => {

    const [loading, setLoading] = useState();
    const [image, setImage] = useState([]);
    const [IsVisiblePagination, setIsVisiblePagination] = useState(false);
    const [totalPages, setTotalPages] = useState();
    const [CurrentPage, setCurrentPage] = useState(0);
    const [TotalGallery, setTotalGallery] = useState()


    const getGallery = () => {

        api.get(`gallery/page?page=${CurrentPage}`).then((res) => {

            /*  setLoading(false) */
            setImage(res.data.content)
            setTotalPages(res.data.totalPages)
            setTotalGallery(res.data.totalElements)
            if (res.data.content === 0) {
                setIsVisiblePagination(true)
            }

        }).catch((error) => {
            console.log(error)
        });
    }

    const handleChanges = (e, value) => {

        setCurrentPage(value - 1);
        /*  setLoading(true) */
    };


    const add = (images) => {
        setLoading(true)
        api.post(`gallery`, images)
            .then((res) => {
                setImage([...image], res.data.content)
                setLoading(false)
                alertConfirmation("Imagen añadido correctamente")
                getGallery()
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }

    const deleted = (id) => {
        Swal.fire({
            title: 'Quieres borrar la imagen?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`gallery/${id}`)
                    .then((res) => {
                        alertConfirmation("Borrado con exito")
                        getGallery()
                    })
                    .catch((error) => {
                        alertError("UPS", "error inesperado!")
                    })
                Swal.fire({
                    text: "Borrando imagen...",
                    didOpen: () => {
                        Swal.showLoading()

                    },
                    willClose: () => {
                        Swal.hideLoading()
                    }
                })
            }

        })

    }


    return <galleryContext.Provider value={{ TotalGallery, CurrentPage, IsVisiblePagination, image, totalPages, handleChanges, loading, deleted, add, getGallery }}>{children}</galleryContext.Provider>;
};


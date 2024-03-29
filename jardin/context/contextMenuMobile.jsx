import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../config/axios/instance"
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"
import Swal from 'sweetalert2';

export const menuMobile = createContext();

export const useMobile = () => {
    return useContext(menuMobile);
};

export const MenuMobileProvider = ({ children }) => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [loading, setLoading] = useState();
    const [publish, setPublish] = useState([]);
    const [valuesForm, setvaluesForm] = useState(
        {

            relevant: "",
            title: "",
            biography: "",
            imageUrl: ""
        })

    const [totalPublications, setTotalPublications] = useState()

    const [totalRelevant, setTotalRelevant] = useState()



    const getAll = () => {
        setLoading(true)
        api.get(`publication/all`)
            .then((res) => {
                setPublish(res.data)
                setTotalPublications(res.data.length)
                setTotalRelevant(res.data.filter(relevant => relevant.relevant == true).length)

                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const add = (data) => {
        setLoading(true)
        api.post(`publication`, data)

            .then((res) => {
                setPublish([...publish, res.data])

                setLoading(false)
                alertConfirmation("Publicacion añadida correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }
    const getOne = (id) => {
        const res = api.get(`publication/${id}`)
            .then((res) => {
                setPublish([res.data])
                setvaluesForm({
                    relevant: res.data.relevant,
                    title: res.data.title,
                    biography: res.data.biography,
                    imageUrl: res.data.imageUrl
                })
            })
            .catch((error) => {
                console.log(error)
            })

        return res
    }

    const edit = (id, update) => {
        setLoading(true)
        api.put(`publication/${id}`, update)
            .then((res) => {
                setPublish([...publish, res.data])
                getOne(id)
                setLoading(false)
                alertConfirmation("Publicacion actualizada correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }
    const deleted = (id) => {
        Swal.fire({
            title: 'Quieres borrar la publicacion?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`publication/${id}`)
                    .then((res) => {
                        alertConfirmation("Borrado con exito")
                        getAll()
                    })
                    .catch((error) => {
                        console.log(error)
                        alertError("UPS", "error inesperado!")
                    })
                Swal.fire({
                    text: "Borrando publicacion...",
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

    return <menuMobile.Provider value={{ totalRelevant, totalPublications, valuesForm, edit, deleted, getOne, loading, add, mobileOpen, setMobileOpen, getAll, publish }}>{children}</menuMobile.Provider>;
};


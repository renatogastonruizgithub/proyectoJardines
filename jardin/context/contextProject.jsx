import { createContext, useContext, useState } from "react";
import { api } from "../config/axios/instance"
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"
import Swal from 'sweetalert2';

export const projects = createContext();

export const useProject = () => {
    return useContext(projects);
};

export const ProjectProvider = ({ children }) => {

    const [loading, setLoading] = useState();
    const [project, setProject] = useState([]);
    const [enableButton, setEnableButton] = useState(true)
    const [valuesForm, setvaluesForm] = useState(
        {
            name: "",
            biography: "",
            imageUrl: ""
        })
    const [TotalProject, setTotalProject] = useState()

    const getTotalProject = () => {
        setLoading(true)
        api.get(`project/all`)
            .then((res) => {
                setTotalProject(res.data.length)
                setProject(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const getAll = () => {
        setLoading(true)
        api.get(`project/all`)
            .then((res) => {
                setProject(res.data)

                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getOne = (id) => {

        const res = api.get(`project/${id}`)
            .then((res) => {
                const getOneProject = project.find(p => p.id == id);
                setProject([res.data])
                setvaluesForm({
                    name: res.data.name,
                    biography: res.data.biography,
                    imageUrl: res.data.imageUrl
                })
            })
            .catch((error) => {
                console.log(error)
            })

        return project
    }

    const add = (projects) => {
        setLoading(true)
        api.post(`project`, projects)
            .then((res) => {
                setProject(...project, res.data)

                setLoading(false)
                alertConfirmation("Proyecto añadido correctamente")
                getAll()
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }

    const deleted = (id) => {
        Swal.fire({
            title: '¿Quieres borrar el proyecto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                api.delete(`project/${id}`)
                    .then((res) => {
                        alertConfirmation("Borrado con exito")
                        getAll()
                    })
                    .catch((error) => {
                        console.log(error)
                        alertError("UPS", "error inesperado!")
                    })
                Swal.fire({
                    text: "Borrando proyecto...",
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

    const edit = (id, update) => {
        setLoading(true)
        instance.put(`project/${id}`, update)
            .then((res) => {
                setProject([...project, res.data])
                getOne(id)
                setLoading(false)
                alertConfirmation("Proyecto actualizado correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }
    return <projects.Provider value={{
        loading, project, getOne, edit, TotalProject, getTotalProject,
        enableButton, valuesForm, add, getAll, deleted
    }}>{children}</projects.Provider>;
};


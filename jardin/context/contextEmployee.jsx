import { createContext, useContext, useState } from "react";
import instance from "../config/axios/instance";
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"
import Swal from 'sweetalert2';

export const employeeState = createContext();

export const useEmployeeState = () => {
    return useContext(employeeState);
};

export const EmployeeProvider = ({ children }) => {
    const [loading, setLoading] = useState();
    const [employee, setEmployee] = useState([]);
    const [oneEmployee, setOneEmployee] = useState([]);
    const [valuesForm, setvaluesForm] = useState(
        {
            name: "",
            lastName: "",
            title: "",
            biography: "",
            img: ""
        })


    const getAll = () => {
        instance.get(`employee/all`)
            .then((res) => {
                setEmployee(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getOne = (id) => {
        const res = instance.get(`employee/${id}`)
            .then((res) => {
                setOneEmployee([res.data])
                setvaluesForm({
                    name: res.data.name,
                    lastName: res.data.last_name,
                    title: res.data.title,
                    biography: res.data.biography,
                    img: res.data.imageUrl
                })
            })
            .catch((error) => {
                console.log(error)
            })

        return res
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
                instance.delete(`employee/${id}`)
                    .then((res) => {
                        alertConfirmation("Borrado con exito")
                        getAll()
                    })
                    .catch((error) => {
                        console.log(error)
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

    const add = (employees) => {
        setLoading(true)
        instance.post(`employee`, employees)
            .then((res) => {
                setEmployee([...employee, res.data])
                setLoading(false)
                alertConfirmation("Empleado añadido correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })
        console.log(employee)
    }

    const edit = (id, update) => {
        setLoading(true)
        instance.put(`employee/${id}`, update)
            .then((res) => {
                setEmployee([...employee, res.data])
                setLoading(false)
                alertConfirmation("Empleado actualizado correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }


    return <employeeState.Provider value={{ oneEmployee, loading, valuesForm, employee, deleted, getAll, getOne, add, edit }}>{children}</employeeState.Provider>;
};

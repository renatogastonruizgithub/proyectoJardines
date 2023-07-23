import { createContext, useContext, useState } from "react";
import { api } from "../config/axios/instance"
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"
import Swal from 'sweetalert2';

export const employeeState = createContext();

export const useEmployeeState = () => {
    return useContext(employeeState);
};

export const EmployeeProvider = ({ children }) => {
    const [loading, setLoading] = useState();
    const [employee, setEmployee] = useState([]);
    const [valuesForm, setvaluesForm] = useState(
        {
            name: "",
            lastName: "",
            title: "",
            biography: "",
            img: ""
        })
    const [TotalEmployee, setTotalEmployee] = useState()

    const getTotal = () => {
        setLoading(true)
        api.get(`employee/all`)
            .then((res) => {
                setTotalEmployee(res.data.length)
                setEmployee(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getAll = () => {
        setLoading(true)
        api.get(`employee/all`)
            .then((res) => {
                setEmployee(res.data)
                setTotalEmployee(res.data.length)

                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getOne = (id) => {
        const res = api.get(`employee/${id}`)
            .then((res) => {
                const getOneEmploye = employee.find(e => e.id == id);
                setEmployee([res.data])
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
                api.delete(`employee/${id}`)
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
        api.post(`employee`, employees)
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
        api.put(`employee/${id}`, update)
            .then((res) => {
                setEmployee([...employee, res.data])
                getOne(id)
                setLoading(false)
                alertConfirmation("Empleado actualizado correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }

    const [pageSizes, setpageSizes] = useState(5)

    //ejemplo de paginacion local

    /*  const [page, setCurrentPage] = useState(1);
  
      const handleChange = (e, value) => {
          setCurrentPage(value);
  
      };
           const itemPerPage = 5
      const totalElements = employee.length
      const totalPages = Math.ceil(totalElements / itemPerPage)
      const last = page * itemPerPage
      const first = last - itemPerPage
      const filteredEmployee = employee.slice(first, last) */

    return <employeeState.Provider value={{
        loading, pageSizes, TotalEmployee,
        valuesForm, employee, deleted, setpageSizes,
        getAll, getOne, add, edit, getTotal
    }}>
        {children}</employeeState.Provider>;
};

import React from 'react'
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { useEffect, useState } from "react";
import axios from 'axios';

import Image from 'next/image';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';


const Empleado = () => {
    const [employees, setEmployees] = useState([])
    const router = useRouter()

    useEffect(() => {
        axios.get(`https://proyecto-jardin.fly.dev/employee/all`)
            .then((res) => {

                setEmployees(res.data)
            })
            .catch((error) => {

            })

    }, [])

    const handleEdit = (id) => {

        router.push("/admin/empleados/edit/" + id)
    }



    return (
        <>
            {
                employees.map((item, empl) => {
                    return (
                        <div key={empl}>
                            <li>{item.name}</li>
                            <li>{item.last_name}</li>
                            <li>{item.title}</li>
                            <li>{item.biography}</li>
                            <Box component="div" sx={{ height: "100px", position: "relative" }}>
                                <Image style={{ objectFit: "contain" }} alt="asd" src={item.imageUrl} fill sizes="100vw" />
                            </Box>
                            <Button onClick={() => handleEdit(item.id)} variant="contained">Editar</Button>
                            <Button variant="text">Eliminar</Button>
                        </div>


                    )
                })
            }
        </>
    )
}

export default Empleado
Empleado.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
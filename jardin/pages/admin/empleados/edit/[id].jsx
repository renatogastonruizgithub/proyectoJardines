import React from 'react'
import LayoutDashboard from '../../../../layouts/adminPages/layoutDashboard'
import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
const editEmployee = () => {
    const router = useRouter()
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        axios.get(`https://proyecto-jardin.fly.dev/employee/${router.query.id}`)
            .then((res) => {

                setEmployees([res.data])
            })
            .catch((error) => {

            })

    }, [])
    return (
        <>
            {console.log(employees)}
            <div>editar empleado </div>
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

                        </div>


                    )
                })
            }
        </>
    )
}

export default editEmployee

editEmployee.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
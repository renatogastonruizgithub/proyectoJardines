import React from 'react'
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { useEffect, useState } from "react";
import TableRow from '@mui/material/TableRow';

import Image from 'next/image';
import { Box, Button, Container, Grid, Paper, Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import { useEmployeeState } from "../../../context/contextEmployee"
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections';
import FormEmployee from '../../../layouts/adminPages/componentesAdmin/formEmployee';
import DataTable from '../../../layouts/adminPages/componentesAdmin/dataTable';
import TableCell from '@mui/material/TableCell';

const Empleado = () => {
    const { employee, deleted, getAll } = useEmployeeState()
    const router = useRouter()

    useEffect(() => {
        getAll()

    }, [])

    const handleEdit = (id) => {

        router.push("/admin/empleados/edit/" + id)
    }

    const tbody = (
        <>
            {
                employee.map((row) => {
                    return (
                        <TableRow key={row.name}>
                            <TableCell align="right">
                                <Avatar alt="avatar" src={row.imageUrl} />

                            </TableCell >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell >
                            <TableCell align="right">{row.last_name}</TableCell >
                            <TableCell align="right">{row.title}</TableCell >
                            <TableCell align="right">{row.biography}</TableCell >
                            <TableCell align="right">
                                <Button onClick={() => handleEdit(row.id)} variant="contained">Editar</Button>

                            </TableCell >
                            <TableCell align="right">

                                <Button variant="text" onClick={() => deleted(row.id)}>Eliminar</Button>
                            </TableCell >
                        </TableRow >
                    )
                })
            }
        </>
    )

    return (
        <>
            <section className='contentDashboard'>
                <HeaderSections
                    title={"Gestion de empleados"}
                    form={<FormEmployee></FormEmployee>}
                >
                </HeaderSections>

                <Container maxWidth="lg" sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <DataTable
                                data={tbody}
                            >

                            </DataTable>
                        </Grid>
                    </Grid>
                </Container>


                {/*      {
                    employee.map((item, empl) => {
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
                                <Button variant="text" onClick={() => deleted(item.id)}>Eliminar</Button>
                            </div>


                        )
                    })
                } */}
            </section>
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
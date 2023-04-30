import React from 'react'
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { useEffect, useState } from "react";
import TableRow from '@mui/material/TableRow';

import Image from 'next/image';
import { Pagination, IconButton, Container, Grid, Stack, Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import { useEmployeeState } from "../../../context/contextEmployee"
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections';
import FormEmployee from '../../../layouts/adminPages/componentesAdmin/formEmployee';
import DataTable from '../../../layouts/adminPages/componentesAdmin/dataTable';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { UploadFileProvider } from '../../../context/contextUploadFile';

const Empleado = () => {
    const { deleted, getAll, filteredEmployee, handleChange, totalPages } = useEmployeeState()
    const router = useRouter()


    console.log(filteredEmployee)
    useEffect(() => {
        getAll()

    }, [])

    const handleEdit = (id) => {
        router.push("/admin/empleados/edit/" + id)
    }



    const tbody = (
        <>
            {
                filteredEmployee.map((row, tabl) => {
                    return (
                        <TableRow key={tabl}>
                            <TableCell align="right">
                                <Avatar alt="avatar" src={row.imageUrl} />

                            </TableCell >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell >
                            <TableCell align="right">{row.last_name}</TableCell >
                            <TableCell align="right">{row.title}</TableCell >
                            <TableCell align="right"
                            >{row.biography}</TableCell >
                            <TableCell align="right">
                                <IconButton color="primary" onClick={() => handleEdit(row.id)} aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </TableCell >
                            <TableCell align="right">
                                <IconButton onClick={() => deleted(row.id)} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
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
                    textButton="Agregar"
                    button={true}
                    form={
                        <UploadFileProvider>
                            <FormEmployee titleUpload='Selecciona una imagen'></FormEmployee>
                        </UploadFileProvider>
                    }
                >
                </HeaderSections>

                <Container maxWidth="lg" sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <DataTable
                                data={tbody}
                            >

                            </DataTable>
                            <Stack sx={{ marginTop: "1.5rem", display: "grid", placeItems: "center" }}>
                                <Pagination defaultPage={0} onChange={handleChange} count={totalPages} shape="rounded" />
                            </Stack>
                        </Grid>
                    </Grid>

                </Container>

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
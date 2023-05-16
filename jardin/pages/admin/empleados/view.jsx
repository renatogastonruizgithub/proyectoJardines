import React from 'react'
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { useEffect, useState } from "react";
import TableRow from '@mui/material/TableRow';
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import { Pagination, IconButton, Container, Grid, Stack, Avatar, Box } from '@mui/material';
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
    const { deleted, getAll, employee, loading, setpageSizes, pageSizes } = useEmployeeState()
    const router = useRouter()



    useEffect(() => {
        getAll()

    }, [])

    const handleEdit = (id) => {
        router.push("/admin/empleados/edit/" + id)
    }
    const columns = [
        {
            field: 'imageUrl',
            headerName: 'Avatar',
            width: 150,
            renderCell: (params => <Avatar alt="avatar" src={params.row.imageUrl} />),
        },
        {
            field: 'name',
            headerName: 'Nombre',
            width: 110,
        },
        {
            field: 'last_name',
            headerName: 'Apellido',
            width: 110,
        },
        {
            field: 'title',
            headerName: 'Titulo',
            width: 110,
        },
        {
            field: 'biography',
            headerName: 'Biografia',
            width: 300,
        },

        {
            field: 'edit',
            headerName: 'Editar',
            width: 110,
            renderCell: (params => <EditIcon sx={{ color: "#1565c0" }} onClick={() => handleEdit(params.row.id)} />),
        },
        {
            field: 'delete',
            headerName: 'Eliminar',
            width: 110,
            renderCell: (params => <DeleteIcon sx={{ color: "#FF5F49" }} onClick={() => deleted(params.row.id)} />),
        },
    ]



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
                            <Box sx={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    sx={{
                                        backgroundColor: "#fff",
                                        // disable cell selection style
                                        '.MuiDataGrid-cell:focus': {
                                            outline: 'none'
                                        },
                                        // pointer cursor on ALL rows
                                        '& .MuiDataGrid-row:hover': {
                                            cursor: 'pointer'
                                        }

                                    }}
                                    rows={employee}
                                    getRowId={(row) => row.id}
                                    columns={columns}
                                    loading={loading}

                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: pageSizes,
                                            },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10, 25]}
                                    onPaginationModelChange={(newPage) => setpageSizes(newPage)}
                                />
                            </Box>
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
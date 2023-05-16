import { React, useEffect, useState } from 'react'
import { UploadFileProvider } from '../../../context/contextUploadFile'
import FormProject from '../../../layouts/adminPages/componentesAdmin/formProject'
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { useProject } from '../../../context/contextProject'
import { Pagination, TableRow, TableCell, IconButton, Container, Grid, Stack, Avatar, Typography } from '@mui/material';
import DataTable from '../../../layouts/adminPages/componentesAdmin/dataTable'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system'



const Proyecto = () => {
    const { loading, project, getAll, deleted } = useProject()
    const router = useRouter()
    const [pageSizes, setpageSizes] = useState(5)


    const columns = [
        {
            field: 'id',
            headerName: 'id',
            width: 50,
        },
        {
            field: 'imageUrl',
            headerName: 'Imagen',
            width: 150,
            renderCell: (params => <Avatar alt="avatar" src={params.row.imageUrl} />),
        },
        {
            field: 'name',
            headerName: 'Nombre',
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
    useEffect(() => {
        getAll()

    }, [])

    const handleEdit = (id) => {
        router.push("/admin/proyectos/" + id)
    }

    return (
        <section className='contentDashboard'>
            <HeaderSections
                title={"Gestion de proyectos"}
                textButton="Agregar"
                button={true}
                form={
                    <UploadFileProvider>
                        <FormProject title="Seleccionar una imagen"></FormProject>
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
                                rows={project}
                                getRowId={(row) => row.id}
                                loading={loading}
                                columns={columns}
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
    )
}

export default Proyecto
Proyecto.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
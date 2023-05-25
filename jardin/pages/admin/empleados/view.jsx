import React from 'react'
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { useEffect } from "react";


import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import { useEmployeeState } from "../../../context/contextEmployee"
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections';
import FormEmployee from '../../../layouts/adminPages/componentesAdmin/formEmployee';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { UploadFileProvider } from '../../../context/contextUploadFile';
import DataTable from '../../../layouts/adminPages/componentesAdmin/dataTable';

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
                    maxWidth="md"
                    form={
                        <UploadFileProvider>
                            <FormEmployee titleUpload='Selecciona una imagen'></FormEmployee>
                        </UploadFileProvider>
                    }
                >
                </HeaderSections>
                <DataTable
                    data={employee}
                    columns={columns}
                    loading={loading}>

                </DataTable>


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
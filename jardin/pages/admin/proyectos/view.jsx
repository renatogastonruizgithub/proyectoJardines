import { React, useEffect } from 'react'
import { UploadFileProvider } from '../../../context/contextUploadFile'
import FormProject from '../../../layouts/adminPages/componentesAdmin/formProject'
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { useProject } from '../../../context/contextProject'
import { Avatar } from '@mui/material';
import DataTable from '../../../layouts/adminPages/componentesAdmin/dataTable'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';

import DataVerify from "../../../layouts/adminPages/componentesAdmin/dataVerify"
import DateMoment from '../../../layouts/adminPages/componentesAdmin/DateMoment'


const Proyecto = () => {
    const { loading, project, getAll, deleted } = useProject()
    const router = useRouter()



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
            field: 'date_creation',
            headerName: 'Creado',
            width: 100,
            renderCell: (params => <DateMoment date={params.row.date_creation} />)
        },
        {
            field: 'date_update',
            headerName: 'Actualizado',
            width: 150,
            renderCell: (params => <DateMoment date={params.row.date_update} />)
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


            <DataVerify
                loading={loading}
                textLoading="Cargando proyectos"
                data={project}
                textNotData="proyectos"
                children={
                    <DataTable
                        columns={columns}
                        data={project}
                        loading={loading}
                    ></DataTable>
                }
            />

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
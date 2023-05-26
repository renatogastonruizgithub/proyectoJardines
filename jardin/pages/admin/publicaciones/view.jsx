import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import { useMobile } from '../../../context/contextMenuMobile'
import { UploadFileProvider } from '../../../context/contextUploadFile'
import FormPublication from '../../../layouts/adminPages/componentesAdmin/FormPublication'
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router'
import DataTable from '../../../layouts/adminPages/componentesAdmin/dataTable'
import DataVerify from '../../../layouts/adminPages/componentesAdmin/dataVerify'

const Prueba = () => {
    const { getAll, publish, deleted, loading } = useMobile()

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
            width: 100,
            renderCell: (params => <Avatar alt="avatar" src={params.row.imageUrl} />),
        },
        {
            field: 'title',
            headerName: 'Titulo',
            width: 110,
        },
        {
            field: 'biography',
            headerName: 'Contenido',
            width: 400,
        },
        {
            field: 'relevant',
            headerName: 'Publicacion destacada',
            width: 160,
            renderCell: (params => params.row.relevant ? <><FavoriteIcon sx={{ height: 20, width: 20, color: "#1565c0" }} /> <p style={{ marginLeft: "10px" }}>Destacada</p> </> : null),
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
        router.push("/admin/publicaciones/" + id)
    }

    return (
        <div style={{ paddingBottom: "2rem" }}>

            <HeaderSections
                title={"Gestion de publicaciones"}
                textButton="Agregar"
                button={true}
                form={
                    <UploadFileProvider>
                        <FormPublication relevant={false} titleUpload="Seleccionar imagene de la publicacion" ></FormPublication>
                    </UploadFileProvider>
                }
            >
            </HeaderSections>

            <DataVerify
                loading={loading}
                textLoading="Cargando publicaciones"
                data={publish}
                textNotData="publicaciones"
                children={
                    <DataTable
                        data={publish}
                        loading={loading}
                        columns={columns}
                    >
                    </DataTable>
                }
            />

        </div>
    )
}

export default Prueba

Prueba.getLayout = function getLayout(page) {
    return (

        <LayoutDashboard>

            {page}

        </LayoutDashboard>

    )
}
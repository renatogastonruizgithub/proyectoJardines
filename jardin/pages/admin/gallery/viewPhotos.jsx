import { React, Suspense } from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { useGallery } from "../../../context/contexGallery"

import Lightbox from '../../../components/lightbox';
import { useEffect, useState } from "react";
import { IconButton } from '@mui/material';
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections';
import { UploadFileProvider } from '../../../context/contextUploadFile';
import FormGallery from '../../../layouts/adminPages/componentesAdmin/formGallery';
import Loading from '../../../components/loading';
import Mycard from '../../../layouts/adminPages/componentesAdmin/card';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import DataVerify from '../../../layouts/adminPages/componentesAdmin/dataVerify';

const ViewPhotos = () => {

    const { CurrentPage, image, loading, deleted,
        IsVisiblePagination, handleChanges, totalPages, getGallery } = useGallery()

    const [open, setOpen] = useState(false)
    const [src, setSrc] = useState()
    const [description, setDescription] = useState()


    useEffect(() => {
        getGallery()

    }, [CurrentPage])



    const swowImage = (src, data) => {
        setOpen(true)
        setSrc(src)
        setDescription(data)
    }
    const closed = () => {
        setOpen(false)
    }



    return (
        <>

            <section className='contentViewPhotos' >

                <HeaderSections
                    title={"Gestion de imagenes"}
                    textButton="Agregar"
                    button={true}
                    maxWidth="sm"
                    form={
                        <UploadFileProvider>
                            <FormGallery title="Seleccionar una imagen"></FormGallery>
                        </UploadFileProvider>
                    }
                >
                </HeaderSections>




                <DataVerify
                    loading={loading}
                    textLoading="Cargando imagenes"
                    data={image}
                    textNotData="imagenes"
                    children={
                        <Container sx={{ marginTop: "3rem" }} maxWidth="lg" >
                            <Grid container spacing={3}>

                                {
                                    image.map((itemsIma, i) => {
                                        return (
                                            <>
                                                <Grid item xs={12} sm={6} lg={3} md={3}>
                                                    <div key={itemsIma}>
                                                        <Mycard
                                                            urlIamge={itemsIma.imageUrl}
                                                            title={itemsIma.description}
                                                            body={itemsIma.description}
                                                            objectFit="cover"
                                                            bodyActions={<>
                                                                <IconButton onClick={() => swowImage(itemsIma.imageUrl, itemsIma.description)}>
                                                                    <VisibilityIcon />
                                                                </IconButton>
                                                                <IconButton onClick={() => deleted(itemsIma.id)}>
                                                                    <DeleteIcon />
                                                                </IconButton>

                                                            </>}
                                                        >

                                                        </Mycard>
                                                    </div>
                                                </Grid>

                                            </>
                                        )
                                    })
                                }
                            </Grid>
                            < Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                                <Pagination disabled={IsVisiblePagination} onChange={handleChanges} count={totalPages} shape="rounded" />
                            </Stack>
                        </Container>
                    }
                />


                <Lightbox
                    open={open}
                    src={src}
                    data={description}
                    onClosed={closed}
                >
                </Lightbox>

            </section>

        </>
    )
}

export default ViewPhotos

ViewPhotos.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
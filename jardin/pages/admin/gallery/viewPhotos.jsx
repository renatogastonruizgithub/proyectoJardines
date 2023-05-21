import { React, Suspense } from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from "axios";
import { galleryContext, useGallery } from "../../../context/contexGallery"
import { alertConfirmation, alertDeleted, alertError, alertLoading } from "../../../components/alert";
import Lightbox from '../../../components/lightbox';
import { useEffect, useState } from "react";
import { Divider } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import LoadingAdmin from '../../../layouts/adminPages/componentesAdmin/loadingAdmin';
import Image from "next/image"
import instance from '../../../config/axios/instance';
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections';
import { UploadFileProvider } from '../../../context/contextUploadFile';
import FormGallery from '../../../layouts/adminPages/componentesAdmin/formGallery';
import Loading from '../../../components/loading';

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


    const galleryComponent = (
        <Container maxWidth="lg">

            {/* <Grid container spacing={3}>
                {
                    image.map((itemdata) => {
                        return (
                            <  >
                                {
                                    itemdata.content.map((item, i) => {
                                        return (
                                            <Grid key={item.id} item xs={12} sm={6} lg={3} md={3}>
                                                <Card key={item.id} sx={{ maxWidth: { xs: "100%" } }}>
                                                    <CardContent sx={{ position: "relative", height: "140px" }}>
                                                        <Image style={{ objectFit: "cover" }} alt="asd" src={item.imageUrl} fill sizes="100vw" />
                                                    </CardContent>
                                                    <CardContent>
                                                        <Typography variant="h6" >
                                                            Descripcion
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {item.description}
                                                        </Typography>
                                                        <Divider></Divider>
                                                        <Typography variant="h6" >
                                                            alternativo (alt)
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" color="text.secondary" >
                                                            {item.alternative}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button onClick={() => swowImage(item.imageUrl, item.description)} variant='contained' size="small">Ver</Button>
                                                        <Button onClick={() => deleted(item.id)} variant='text' size="small">Eliminar</Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        )

                                    })
                                }
                            </>
                        )

                    })
                }
            </Grid> */}
        </Container>

    )


    return (
        <>

            <section className='contentViewPhotos' >

                <HeaderSections
                    title={"Gestion de imagenes"}
                    textButton="Agregar"
                    button={true}
                    form={
                        <UploadFileProvider>
                            <FormGallery title="Seleccionar una imagen"></FormGallery>
                        </UploadFileProvider>
                    }
                >
                </HeaderSections>

                <Container sx={{ marginTop: "3rem" }} maxWidth="lg" >
                    <Grid container spacing={3}>

                        {
                            image.map((items, i) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={6} lg={3} md={3}>
                                            <Card key={items.id} sx={{ maxWidth: { xs: "100%" } }}>
                                                <CardContent sx={{ position: "relative", height: "140px" }}>
                                                    <Image style={{ objectFit: "cover" }} alt="asd" src={items.imageUrl} fill sizes="100vw" />
                                                </CardContent>
                                                <CardContent>
                                                    <Typography variant="h6" >
                                                        Descripcion
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {items.description}
                                                    </Typography>
                                                    <Divider></Divider>
                                                    <Typography variant="h6" >
                                                        alternativo (alt)
                                                    </Typography>
                                                    <Typography gutterBottom variant="body2" color="text.secondary" >
                                                        {items.alternative}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button onClick={() => swowImage(items.imageUrl, items.description)} variant='contained' size="small">Ver</Button>
                                                    <Button onClick={() => deleted(items.id)} variant='text' size="small">Eliminar</Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>

                                    </>
                                )
                            })
                        }
                    </Grid>
                </Container>



                {/*      {
                    loading ?

                        <LoadingAdmin title={"cargando imagenes"}></LoadingAdmin>
                        :
                        (

                            image.length === 0 ?
                                (<h1> No hay imagenes para mostrar</h1>

                                )
                                :
                                (
                                    galleryComponent

                                )

                        )
                } */}

                <Lightbox
                    open={open}
                    src={src}
                    data={description}
                    onClosed={closed}
                >
                </Lightbox>
                < Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                    <Pagination disabled={IsVisiblePagination} onChange={handleChanges} count={totalPages} shape="rounded" />
                </Stack>
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
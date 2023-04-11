import React, { useContext } from 'react'
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
import { galleryContext } from "../../../context/contexGallery"
import { alertConfirmation, alertDeleted, alertError, alertLoading } from "../../../components/alert";
import Lightbox from '../../../components/lightbox';
import { useEffect, useState } from "react";
import { Divider } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import LoadingAdmin from '../../../layouts/adminPages/componentesAdmin/loadingAdmin';
import Image from "next/image"
const ViewPhotos = () => {

    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);
    const [IsVisiblePagination, setIsVisiblePagination] = useState(false);
    const [data, setdata] = useState([]);
    const [CurrentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState();
    const [open, setOpen] = useState(false)
    const [src, setSrc] = useState()
    const [description, setDescription] = useState()


    useEffect(() => {
        getGalleri()

    }, [CurrentPage])

    const getGalleri = () => {
        axios.get(`https://proyecto-jardin.fly.dev/gallery/page?page=${CurrentPage}`).then((res) => {

            setLoading(false)
            setdata(res.data.content)
            setTotalPages(res.data.totalPages)

            if (res.data.content === 0) {
                setIsVisiblePagination(true)
            }

        }).catch((error) => {
            console.log(error)
        });
    }

    const handleChanges = (e, value) => {
        setCurrentPage(value - 1);
        setLoading(true)
    };


    const swowImage = (src, data) => {
        setOpen(true)
        setSrc(src)
        setDescription(data)
    }
    const closed = () => {
        setOpen(false)
    }

    const handleDeleted = async (id) => {
        await axios.delete(`https://proyecto-jardin.fly.dev/gallery/${id}`)
            .then((res) => {
                alertConfirmation("Borrado con exito")
                getGalleri()
            }).catch((error) => {
                console.log(error)
                alertError("UPS", "error inesperado!")
            })
    }

    const galleryComponent = (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {

                    data.map((itemdata, indexG) => (
                        <Grid key={indexG} item xs={12} sm={6} lg={3} md={3}>
                            <Card sx={{ maxWidth: { xs: "100%" } }}>
                                <CardContent sx={{ position: "relative", height: "140px" }}>
                                    <Image style={{ objectFit: "cover" }} alt="asd" src={itemdata.imageUrl} fill sizes="100vw" />
                                </CardContent>
                                <CardContent>
                                    <Typography variant="h6" >
                                        Descripcion
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {itemdata.description}
                                    </Typography>
                                    <Divider></Divider>
                                    <Typography variant="h6" >
                                        alternativo (alt)
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary" >
                                        {itemdata.alternative}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => swowImage(itemdata.imageUrl, itemdata.description)} variant='contained' size="small">Ver</Button>
                                    <Button onClick={() => alertDeleted(handleDeleted, itemdata.id)} variant='text' size="small">Eliminar</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>

    )


    return (
        <>
            <section className='contentViewPhotos' >

                {
                    loading ?

                        <LoadingAdmin title={"cargando imagenes"}></LoadingAdmin>
                        :
                        (

                            data.length === 0 ?
                                (<h1> No hay imagenes para mostrar</h1>

                                )
                                :
                                (
                                    galleryComponent

                                )

                        )
                }

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
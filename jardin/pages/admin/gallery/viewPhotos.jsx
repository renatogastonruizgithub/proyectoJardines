import React from 'react'
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
import { useGallery } from "../../../context/contexGallery"
import Lightbox from '../../../components/lightbox';
import { useEffect, useState } from "react";
import { Divider } from '@mui/material';

const ViewPhotos = () => {

    const {
        loading, itemData, totalPages, CurrentPage,
        handleDeleted, getImages,
        handleChangePage
    } = useGallery();

    const [open, setOpen] = useState(false)
    const [src, setSrc] = useState()
    const [description, setDescription] = useState()

    const [page, setPage] = useState(0)

    useEffect(() => {
        getImages()

    }, [itemData])



    const handleChange = (value) => {
        setPage(value - 1)
    };

    console.log(page)

    const swowImage = (src, data) => {
        setOpen(true)
        setSrc(src)
        setDescription(data)
    }
    const closed = () => {
        setOpen(false)
    }

    const handleDelete = (id) => {
        handleDeleted(id)
    }



    return (
        <>
            <section style={{ height: "100% !important", paddingTop: "10%", position: "relative" }}>
                {
                    loading ?
                        (
                            <Box sx={{ marginTop: "10%", display: "grid", placeItems: "center" }}>
                                <span>Cargando imagenes</span>
                                <CircularProgress sx={{ marginTop: "1rem" }} />
                            </Box>
                        ) : (
                            <Container maxWidth="lg">
                                <Grid container spacing={3}>
                                    {

                                        itemData.map((itemdata, indexG) => (
                                            <Grid key={indexG} item xs={12} sm={6} lg={3} md={3}>
                                                <Card sx={{ maxWidth: 245 }}>
                                                    <CardMedia
                                                        sx={{ height: 140 }}
                                                        image={itemdata.imageUrl}
                                                        title="green iguana"
                                                    />
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
                                                        <Button onClick={() => handleDelete(itemdata.id)} size="small">Eliminar</Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                                    <Pagination defaultPage={1} onChange={handleChange} count={totalPages} shape="rounded" />
                                </Stack>

                            </Container>
                        )
                }

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
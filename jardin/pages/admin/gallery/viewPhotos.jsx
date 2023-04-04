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
import Container from '@mui/material/Container';
import { useGallery } from "../../../context/contexGallery"
import Lightbox from '../../../components/lightbox';
import { useEffect, useState } from "react";
import { Divider } from '@mui/material';
const ViewPhotos = () => {
    const { itemData, totalPages, CurrentPage } = useGallery();


    const handleChanges = (e, value) => {

    };

    const [open, setOpen] = useState(false)

    const [src, setSrc] = useState()
    const [description, setDescription] = useState()
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
            <Container maxWidth="lg">
                <Grid container spacing={3}>

                    {itemData.map((itemdata, indexG) => (
                        <Grid key={indexG} item xs={12} lg={3}>
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
                                        {itemdata.relevant}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => swowImage(itemdata.imageUrl, itemdata.description)} variant='contained' size="small">Ver</Button>
                                    <Button size="small">Eliminar</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
                <Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                    <Pagination defaultPage={1} onChange={handleChanges} count={totalPages} shape="rounded" />
                </Stack>

                <Lightbox
                    open={open}
                    src={src}
                    data={description}
                    onClosed={closed}
                >

                </Lightbox>
            </Container>
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
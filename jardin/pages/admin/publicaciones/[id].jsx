import React, { useEffect } from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { useMobile } from '../../../context/contextMenuMobile'
import { useRouter } from 'next/router'
import { Container, Box, Divider, Grid, Paper, Typography, Button, Card, CardContent, CardActions, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormPublication from '../../../layouts/adminPages/componentesAdmin/FormPublication'
import { UploadFileProvider } from '../../../context/contextUploadFile'




const EditPublication = () => {
    const { getAll, publish, getOne, valuesForm } = useMobile()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        getOne(id)

    }, [publish])


    return (
        <div>

            <Container maxWidth="lg" sx={{ marginBottom: "1.5rem", }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                        }}>
                            <Typography variant='h4'>
                                Publicacion:
                                {" "}
                                {valuesForm.title}

                            </Typography>
                            <Button variant="text"><Link href="/admin/publicaciones/view">Volver</Link></Button>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ paddingBottom: "4rem", }} >
                <Grid container spacing={5} >
                    <Grid item xs={12} lg={6} >
                        <Typography variant="h4" color="text.secondary">
                            Datos actuales
                        </Typography>
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            {
                                publish.map((itemEdit, i) => {
                                    return (
                                        <div key={i}>
                                            <Card sx={{ maxWidth: { xs: "100%" }, display: 'flex', marginTop: "1.5rem" }} >
                                                <CardContent sx={{ position: "relative", height: "200px", width: "30%" }}>
                                                    <Image style={{ objectFit: "cover" }} alt="asd" src={itemEdit.imageUrl} fill sizes="100vw" />
                                                </CardContent>
                                                <Box>
                                                    <CardContent>
                                                        <Typography variant="h4" color="text.secondary">
                                                            {itemEdit.title}
                                                        </Typography>
                                                        <Divider></Divider>
                                                        <Typography gutterBottom variant="body2" color="text.secondary" >
                                                            {itemEdit.biography}
                                                        </Typography>


                                                        <Typography variant="p" >
                                                            Editado el {" "} {itemEdit.date_creation}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        {itemEdit.relevant ?
                                                            (<><IconButton aria-label="favorito">
                                                                <FavoriteIcon sx={{ height: 20, width: 20 }} />
                                                            </IconButton> Publicacion destacada </>)
                                                            :
                                                            null}
                                                    </CardActions>
                                                </Box>
                                            </Card>
                                        </div>
                                    )
                                })
                            }


                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Typography variant="h4" color="text.secondary">
                            Cambiar los datos
                        </Typography>
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>

                            <UploadFileProvider>
                                <FormPublication
                                    id={id}
                                    title={valuesForm.title}
                                    biography={valuesForm.biography}
                                    titleUpload="cambiar la imagen de la publicacion"
                                    relevant={valuesForm.relevant}
                                >
                                </FormPublication>
                            </UploadFileProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default EditPublication
EditPublication.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
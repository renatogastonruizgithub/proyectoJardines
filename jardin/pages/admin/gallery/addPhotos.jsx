import React from 'react'
import { Button, Container, Grid, Input, TextField, Typography, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import { Formik, Form, useFormik } from 'formik';
import axios from "axios";
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { alertConfirmation, alertError } from '../../../components/alert';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRef, useEffect } from 'react';




const AdminGeleria = () => {



    const [preview, setPreview] = useState([])
    const [image, setimage] = useState("")
    const [loading, setLoading] = useState();

    const inputRef = useRef(null);

    const resetFileInput = () => {
        /* inputRef.current.value = null */
        setimage(inputRef.current.value = null)
    }

    const vistaPrevia = async (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setimage(e.target.files[0])
    }

    const formik = useFormik({
        initialValues: {
            data_gallery: {
                description: "",
                alternative: ""
            },

        },
        onSubmit: (values, { resetForm }) => {

            setLoading(true)
            const formData = new FormData()
            formData.append("image", new Blob([image], { type: "form-data" }))
            formData.append("data_gallery", new Blob([JSON.stringify(values.data_gallery)], { type: "application/json" }))




            axios.post(`https://proyecto-jardin.fly.dev/gallery`, formData,
                {
                    Headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
                .then((res) => {
                    setLoading(false)
                    alertConfirmation("Imagen añadida a la galeria")
                    resetForm()
                    resetFileInput()
                    setPreview(null)
                })
                .catch((error) => {
                    setLoading(false)
                    alertError("UPS", "error inesperado")
                    resetForm()
                    resetFileInput()
                    setPreview(null)
                })
        }
    });

    return (

        <section style={{ height: "100%", paddingBottom: "2rem" }} >

            <Container maxWidth="lg" >

                <Grid container sx={{ display: "grid", placeItems: "center" }} >
                    <Grid item xs={12} lg={6} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <Formik >
                                <Form onSubmit={formik.handleSubmit}>
                                    <Stack spacing={3}>
                                        <Typography color="GrayText" variant='body1' >Selecciona tu imagen </Typography>
                                        <Input
                                            inputRef={inputRef}
                                            size="small"
                                            placeholder="Placeholder"
                                            type="file"
                                            name='image'
                                            onChange={(e) => { vistaPrevia(e) }}
                                        />
                                        <Typography variant='body1' color="GrayText">vista previa</Typography>
                                        <Box component="div" sx={{ height: "100px" }}>
                                            <img src={preview} style={{ objectFit: "contain", width: "100%", height: "100px" }} />
                                        </Box>
                                        <TextField
                                            size="small"
                                            name='data_gallery.description'
                                            label="Descripcion de la foto"
                                            variant="filled"
                                            value={formik.values.data_gallery.description}
                                            onChange={formik.handleChange}
                                        />
                                        <TextField
                                            size="small"
                                            name='data_gallery.alternative'
                                            label="texto alternativo (alt)"
                                            variant="filled"
                                            value={formik.values.data_gallery.alternative}
                                            onChange={formik.handleChange}
                                        />

                                    </Stack>
                                    <Stack>
                                        <LoadingButton
                                            sx={{ marginTop: "2rem" }}
                                            type="submit"
                                            endIcon={<SendIcon />}
                                            loading={loading}
                                            loadingPosition="end"
                                            variant="contained"
                                        >
                                            <span>subir</span>
                                        </LoadingButton>
                                    </Stack>
                                </Form>
                            </Formik>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>

    )


}

export default AdminGeleria

AdminGeleria.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}

/* onSubmit={async (values, { resetForm }) => {
                             const metadata = {
                                  contentType: `${file.type}`
                              }
                              const idImagen = Date.now() + "-" + Math.round(Math.random() * 1e9);
                              const storageRef = ref(storage, `galeria/${idImagen}`);
                              await uploadBytes(storageRef, file, metadata)
                              const urlFirebase = await getDownloadURL(storageRef)
                              setUrl(urlFirebase) */
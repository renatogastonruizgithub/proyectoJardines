import React from 'react'
import { Button, Container, Grid, Input, TextField, Typography, Divider, Paper } from '@mui/material';
import { storage } from "../../config/firebase/firebase"
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import { Formik, Form, useFormik } from 'formik';
import axios from "axios";

const AdminGeleria = () => {
    const [file, setFile] = useState([])
    const [url, setUrl] = useState([])
    const [preview, setPreview] = useState([])

    const subir = async () => {
        const metadata = {
            contentType: `${file.type}`
        }
        const idImagen = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const storageRef = ref(storage, `galeria/${idImagen}`);
        await uploadBytes(storageRef, file, metadata)
        let string = setUrl(await getDownloadURL(storageRef))
        return string
    }

    const vistaPrevia = async (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setFile(e.target.files[0])
    }


    return (
        <section style={{ height: "100vh", paddingBottom: "2rem" }} >

            <Container maxWidth="lg">
                <Grid container sx={{ display: "grid", placeItems: "center" }} >
                    <Grid item xs={12} lg={6} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <Formik
                                initialValues={{
                                    imagen: " ",
                                    descripcion: "",
                                    alternativo: ""

                                }}
                                onSubmit={(values, { resetForm }) => {
                                    const valuess = {
                                        imagen: url,
                                        descripcion: values.descripcion,
                                        alternativo: values.alternativo
                                    }
                                    axios.post(`http://localhost:8080/galeria`, valuess)
                                        .then((res) => {
                                            resetForm()
                                            alert("enviado con exito")
                                        })
                                        .catch((error) => {
                                            resetForm()
                                            alert("error")
                                        })
                                }}
                            >
                                {
                                    ({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
                                        <Form >
                                            <Stack spacing={3}>
                                                <Typography variant='p'>Selecciona tu imagen </Typography>
                                                <Input
                                                    placeholder="Placeholder"
                                                    type="file"
                                                    name='imagen'
                                                    onChange={(e) => { vistaPrevia(e) }}
                                                />
                                                <Typography variant='body1' >vista previa</Typography>
                                                <Box component="div">
                                                    <img src={preview} style={{ objectFit: "contain", width: "100%", height: "200px" }} />
                                                </Box>
                                                <TextField
                                                    name='descripcion'
                                                    id="filled-basic"
                                                    label="Descripcion de la foto"
                                                    variant="filled"
                                                    value={values.descripcion}
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    name='alternativo'
                                                    id="filled-basic"
                                                    label="texto alternativo (alt)"
                                                    variant="filled"
                                                    value={values.alternativo}
                                                    onChange={handleChange}
                                                />

                                            </Stack>
                                            <Stack >
                                                <Button onClick={() => subir()} type="submit" sx={{ marginTop: "4rem" }} variant="contained" >subir</Button>
                                            </Stack>

                                        </Form>
                                    )
                                }
                            </Formik>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default AdminGeleria
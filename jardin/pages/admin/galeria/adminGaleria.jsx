import React from 'react'
import { Button, Container, Grid, Input, TextField, Typography, Divider, Paper } from '@mui/material';
import { storage } from "../../../config/firebase/firebase"
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { useState } from 'react';
import { Box, Stack } from '@mui/system';
import { Formik, Form, useFormik } from 'formik';
import axios from "axios";
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"
import { async } from '@firebase/util';



const AdminGeleria = () => {
    const [file, setFile] = useState([])
    const [url, setUrl] = useState()
    const [preview, setPreview] = useState([])

    const vistaPrevia = async (e) => {
        e.preventDefault()
        setFile(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))

    }

    return (

        <section style={{ height: "100vh", paddingBottom: "2rem" }} >

            <Container maxWidth="lg">
                <Grid container sx={{ display: "grid", placeItems: "center" }} >
                    <Grid item xs={12} lg={6} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <Formik
                                initialValues={{
                                    image: " ",
                                    description: "",
                                    alternative: ""

                                }}
                                onSubmit={async (values, { resetForm }) => {
                                    const metadata = {
                                        contentType: `${file.type}`
                                    }
                                    const idImagen = Date.now() + "-" + Math.round(Math.random() * 1e9);
                                    const storageRef = ref(storage, `galeria/${idImagen}`);
                                    await uploadBytes(storageRef, file, metadata)
                                    const urlFirebase = await getDownloadURL(storageRef)
                                    setUrl(urlFirebase)
                                    const endValues = {
                                        image: urlFirebase,
                                        description: values.description,
                                        alternative: values.alternative
                                    }
                                    console.log(endValues)
                                    axios.post(`http://localhost:8080/gallery`, endValues)
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
                                    ({ handleSubmit, errors, touched, values, handleChange, setFieldValue }) => (
                                        <Form >
                                            <Stack spacing={3}>
                                                <Typography color="GrayText" variant='body1' >Selecciona tu imagen </Typography>
                                                <Input
                                                    size="small"
                                                    placeholder="Placeholder"
                                                    type="file"
                                                    name='image'

                                                    onChange={(e) => { vistaPrevia(e); }}
                                                />
                                                <Typography variant='body1' color="GrayText">vista previa</Typography>
                                                <Box component="div" sx={{ height: "100px" }}>
                                                    <img src={preview} style={{ objectFit: "contain", width: "100%", height: "100px" }} />
                                                </Box>
                                                <TextField
                                                    size="small"
                                                    name='description'
                                                    id="filled-basic"
                                                    label="Descripcion de la foto"
                                                    variant="filled"
                                                    value={values.description}
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    size="small"
                                                    name='alternative'
                                                    id="filled-basic"
                                                    label="texto alternativo (alt)"
                                                    variant="filled"
                                                    value={values.alternative}
                                                    onChange={handleChange}
                                                />

                                            </Stack>
                                            <Stack >
                                                <Button type="submit" sx={{ marginTop: "4rem" }} variant="contained" >subir</Button>
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

AdminGeleria.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
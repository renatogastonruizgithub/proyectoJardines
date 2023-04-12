import React from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { Button, Container, Grid, Input, TextField, Typography, Paper, Stack } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';



const Add = () => {
    return (
        <>
            <Container maxWidth="lg" >

                <Grid container sx={{ display: "grid", placeItems: "center" }} >
                    <Grid item xs={12} lg={6} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <Formik >
                                <Form >
                                    <Stack spacing={3}>
                                        <Typography color="GrayText" variant='body1' >Selecciona tu imagen </Typography>
                                        <Input

                                            size="small"
                                            placeholder="Placeholder"
                                            type="file"
                                            name='image'
                                        /*   onChange={(e) => { vistaPrevia(e) }} */
                                        />
                                        <Typography variant='body1' color="GrayText">vista previa</Typography>
                                        {/* <Box component="div" sx={{ height: "100px", position: "relative" }}>
                                            <Image style={{ objectFit: "contain" }} alt="asd" src={`${preview}`} fill sizes="100vw" />
                                        </Box> */}
                                        <TextField
                                            size="small"
                                            name='data_gallery.description'
                                            label="Descripcion de la foto"
                                            variant="filled"

                                        />
                                        <TextField
                                            size="small"
                                            name='data_gallery.alternative'
                                            label="texto alternativo (alt)"
                                            variant="filled"

                                        />

                                    </Stack>
                                    <Stack>
                                        <LoadingButton
                                            sx={{ marginTop: "2rem" }}
                                            type="submit"
                                            endIcon={<SendIcon />}

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
        </>
    )
}

export default Add
Add.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
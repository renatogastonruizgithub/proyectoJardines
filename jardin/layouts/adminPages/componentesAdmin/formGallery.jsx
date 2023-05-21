import React from 'react'
import { Button, Container, Grid, Input, TextField, Typography, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { Box, Stack } from '@mui/system';
import { Formik, Form, useFormik } from 'formik';
import { alertConfirmation, alertError } from '../../../components/alert';
import LoadingButton from '@mui/lab/LoadingButton';

import instance from '../../../config/axios/instance';
import UploadFile from './uploadFile';
import { useUploadFile } from '../../../context/contextUploadFile';
import { useGallery } from '../../../context/contexGallery';

const FormGallery = ({ titleUpload, description = "", alternative = "" }) => {

    const { image, resetFileInput } = useUploadFile()
    const { add, loading } = useGallery()


    const formik = useFormik({
        initialValues: {
            data_gallery: {
                description: description,
                alternative: alternative
            },

        },
        onSubmit: (values, { resetForm }) => {

            const formData = new FormData()
            formData.append("image", new Blob([image], { type: "form-data" }))
            formData.append("data_gallery", new Blob([JSON.stringify(values.data_gallery)], { type: "application/json" }))
            add(formData)
            resetForm()
            resetFileInput()
        }
    });


    return (
        <>
            <Container maxWidth="lg" >

                <Grid container sx={{ display: "grid", placeItems: "center" }} >
                    <Grid item xs={12} lg={12} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <Formik >
                                <Form onSubmit={formik.handleSubmit}>
                                    <Stack spacing={3}>
                                        <UploadFile title={titleUpload}></UploadFile>
                                        <TextField
                                            size="small"
                                            name='data_gallery.description'
                                            label="Descripcion de la foto"
                                            variant="filled"
                                            fullWidth={true}
                                            value={formik.values.data_gallery.description}
                                            onChange={formik.handleChange}
                                        />
                                        <TextField
                                            size="small"
                                            name='data_gallery.alternative'
                                            label="texto alternativo (alt)"
                                            variant="filled"
                                            fullWidth={true}
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
        </>
    )
}

export default FormGallery
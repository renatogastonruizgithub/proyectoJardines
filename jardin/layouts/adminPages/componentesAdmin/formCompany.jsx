import React from 'react'
import { Box, Input, TextField, Typography, Stack, IconButton } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import UploadFile from './uploadFile';
import { useCompany } from '../../../context/contextCompany';
import { useUploadFile } from '../../../context/contextUploadFile';

const FormCompany = ({
    titleUpload = "",
    location = "",
    names = "",
    resolution = "",
    biography = "",
    schedules = "",
    phone = "",
    email = "",
    linkIg = "",
    linkFb = "",
    linkLk = "",
    mission = "",
    vision = "",
    id = ""
}) => {

    const { edit, loading, add } = useCompany()
    const { image, resetFileInput } = useUploadFile()
    const resetFormValues = () => {
        resetFileInput()
    }

    const formik = useFormik({
        initialValues: {
            data_company: {
                location: location,
                name: names,
                resolution: resolution,
                biography: biography,
                schedules: schedules,
                phone: phone,
                email: email,
                linkIg: linkIg,
                linkFb: linkFb,
                linkLk: linkLk,
                mission: mission,
                vision: vision
            }
        },
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData()


            if (id != "") {

                //editar
                if (!image) {
                    //si no envia la imagen se envia la misma                    
                    formData.append("data_company", new Blob([JSON.stringify(values.data_company)],
                        { type: "application/json" }))
                    edit(formData)
                    resetForm()
                    resetFormValues()

                }
                else {

                    formData.append("image", new Blob([image], { type: "form-data" }))
                    formData.append("data_company", new Blob([JSON.stringify(values.data_company)],
                        { type: "application/json" }))
                    edit(formData)
                    resetForm()
                    resetFormValues()

                }
            }
            else {
                //agregar
                formData.append("image", new Blob([image], { type: "form-data" }))
                formData.append("data_company", new Blob([JSON.stringify(values.data_company)],
                    { type: "application/json" }))
                add(formData)
                resetForm()
                resetFormValues()
            }

        }
    });


    return (
        <div>
            <Formik >
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>

                        <UploadFile title={titleUpload}></UploadFile>

                        <Stack direction="row" spacing={4}>
                            <TextField
                                size="small"
                                name='data_company.name'
                                label="nombre"
                                variant="filled"
                                value={formik.values.data_company.name}
                                fullWidth={true}
                                onChange={formik.handleChange}
                            />
                            <TextField
                                size="small"
                                name='data_company.phone'
                                label="phone"
                                variant="filled"
                                value={formik.values.data_company.phone}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                            <TextField
                                size="small"
                                name='data_company.resolution'
                                label="Resolucion"
                                variant="filled"
                                value={formik.values.data_company.resolution}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                        </Stack>


                        <TextField
                            size="small"
                            name='data_company.biography'
                            label="biografia"
                            variant="filled"
                            value={formik.values.data_company.biography}
                            onChange={formik.handleChange}
                            multiline
                            rows={7}
                        />

                        <Stack direction="row" spacing={2}>
                            <TextField
                                size="small"
                                name='data_company.schedules'
                                label="Horarios"
                                variant="filled"
                                value={formik.values.data_company.schedules}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />

                            <TextField
                                size="small"
                                name='data_company.location'
                                label="Direccion"
                                variant="filled"
                                fullWidth={true}
                                value={formik.values.data_company.location}
                                onChange={formik.handleChange}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                size="small"
                                name='data_company.email'
                                label="email"
                                variant="filled"
                                value={formik.values.data_company.email}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                            <TextField
                                size="small"
                                name='data_company.linkIg'
                                label="link de instagram"
                                variant="filled"
                                value={formik.values.data_company.linkIg}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                size="small"
                                name='data_company.linkFb'
                                label="link de Facebook"
                                variant="filled"
                                value={formik.values.data_company.linkFb}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                            <TextField
                                size="small"
                                name='data_company.linkLk'
                                label="link de Linkedin"
                                variant="filled"
                                value={formik.values.data_company.linkLk}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                        </Stack>



                        <TextField
                            size="small"
                            name='data_company.mission'
                            label="mission"
                            variant="filled"
                            value={formik.values.data_company.mission}
                            onChange={formik.handleChange}
                            multiline
                            rows={7}
                        />
                        <TextField
                            size="small"
                            name='data_company.vision'
                            label="vision"
                            variant="filled"
                            value={formik.values.data_company.vision}
                            onChange={formik.handleChange}
                            multiline
                            rows={7}
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
                            <span>Enviar</span>
                        </LoadingButton>
                    </Stack>
                </Form>
            </Formik>


        </div>
    )
}

export default FormCompany
import React from 'react'
import { Box, Input, TextField, Typography, Stack, IconButton } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useEmployeeState } from '../../../context/contextEmployee';
import { UploadFileProvider } from '../../../context/contextUploadFile';
import { useUploadFile } from "../../../context/contextUploadFile"

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import UploadFile from './uploadFile';

const FormEmployee = ({ titleUpload = "", name = "", lastName = "", id = "", biography = "", title = "", img = "" }) => {

    const { image, resetFileInput } = useUploadFile()
    const { add, loading, getOne, edit } = useEmployeeState()

    const resetFormValues = () => {
        resetFileInput()
    }


    const formik = useFormik({
        initialValues: {
            data_employee: {
                last_name: lastName,
                name: name,
                title: title,
                biography: biography
            }
        },
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData()


            if (id != "") {
                console.log(image)
                //editar
                if (!image) {
                    //si no envia la imagen se envia la misma                    
                    formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
                        { type: "application/json" }))
                    edit(id, formData)
                    resetForm()
                    resetFormValues()
                    getOne(id)
                }
                else {

                    formData.append("image", new Blob([image], { type: "form-data" }))
                    formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
                        { type: "application/json" }))
                    edit(id, formData)
                    resetForm()
                    resetFormValues()
                    getOne(id)
                }
            }
            else {
                //agregar
                formData.append("image", new Blob([image], { type: "form-data" }))
                formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
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
                                name='data_employee.name'
                                label="nombre"
                                variant="filled"
                                value={formik.values.data_employee.name}
                                fullWidth={true}
                                onChange={formik.handleChange}
                            />
                            <TextField
                                size="small"
                                name='data_employee.last_name'
                                label="Apellido"
                                variant="filled"
                                fullWidth={true}
                                value={formik.values.data_employee.last_name}
                                onChange={formik.handleChange}
                            />
                            <TextField
                                size="small"
                                name='data_employee.title'
                                label="Titulo"
                                variant="filled"
                                value={formik.values.data_employee.title}
                                onChange={formik.handleChange}
                                fullWidth={true}
                            />
                        </Stack>


                        <TextField
                            size="small"
                            name='data_employee.biography'
                            label="biografia"
                            variant="filled"
                            value={formik.values.data_employee.biography}
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
                            <span>subir</span>
                        </LoadingButton>
                    </Stack>
                </Form>
            </Formik></div>
    )
}

export default FormEmployee
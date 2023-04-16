import React from 'react'
import { Box, Input, TextField, Typography, Stack } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useEmployeeState } from '../context/contextEmployee';
import { useState, useRef } from "react";
import Image from 'next/image';

const FormEmployee = ({ name = "", lastName = "", id = "", biography = "", title = "" }) => {
    const { add, loading, getOne, edit } = useEmployeeState()
    const [preview, setPreview] = useState([])
    const [image, setimage] = useState("")


    const inputRef = useRef(null);

    const resetFileInput = () => {
        setimage(inputRef.current.value = null)

    }

    const vistaPrevia = async (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        setimage(e.target.files[0])
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
                //editar
                formData.append("image", new Blob([image], { type: "form-data" }))
                formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
                    { type: "application/json" }))

                edit(id, formData)
                resetForm()
                resetFileInput()
                setPreview(null)
                getOne(id)
            }
            else {
                //agregar
                formData.append("image", new Blob([image], { type: "form-data" }))
                formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
                    { type: "application/json" }))
                add(formData)
                resetForm()
                setPreview(null)
                setimage(null)
                resetFileInput()
            }



        }
    });


    return (
        <div>
            <Formik >
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                        <Typography color="GrayText" variant='body1' >Selecciona tu imagen </Typography>
                        <Input
                            size="small"
                            placeholder="Placeholder"
                            type="file"
                            name='image'
                            inputRef={inputRef}
                            onChange={(e) => { vistaPrevia(e) }}
                        />
                        <Typography variant='body1' color="GrayText">vista previa</Typography>
                        <Box component="div" sx={{ height: "100px", position: "relative" }}>
                            <img style={{ objectFit: "contain", height: "100px" }} alt="imagen" src={preview} />
                        </Box>


                        <TextField
                            size="small"
                            name='data_employee.name'
                            label="nombre"
                            variant="filled"
                            value={formik.values.data_employee.name}

                            onChange={formik.handleChange}
                        />
                        <TextField
                            size="small"
                            name='data_employee.last_name'
                            label="Apellido"
                            variant="filled"
                            value={formik.values.data_employee.last_name}
                            onChange={formik.handleChange}
                        />
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
                        <TextField
                            size="small"
                            name='data_employee.title'
                            label="Titulo"
                            variant="filled"
                            value={formik.values.data_employee.title}
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
            </Formik></div>
    )
}

export default FormEmployee
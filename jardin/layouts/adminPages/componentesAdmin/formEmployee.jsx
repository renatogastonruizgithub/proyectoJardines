import React from 'react'
import { Box, Input, TextField, Typography, Stack, IconButton } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useEmployeeState } from '../../../context/contextEmployee';
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
const FormEmployee = ({ name = "", lastName = "", id = "", biography = "", title = "", img = "" }) => {


    const { add, loading, getOne, edit } = useEmployeeState()
    const [preview, setPreview] = useState()
    const [image, setimage] = useState()
    const [imgBlob, setimgBlob] = useState()

    const inputRef = useRef(null);

    useEffect(() => {
        //convertir url a blob en caso que el user no cargue imagen
        fetch(img)
            .then((res) => res.blob())
            .then((blob) => {
                setimgBlob(blob)
            })

    }, [imgBlob])


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
                if (!image) {
                    //si no envia la imagen se envia la misma
                    var blob = new Blob([imgBlob], { type: "form-data" });
                    formData.append("image", blob)
                    formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
                        { type: "application/json" }))
                    edit(id, formData)
                }
                else {
                    formData.append("image", new Blob([image], { type: "form-data" }))
                    formData.append(" data_employee", new Blob([JSON.stringify(values.data_employee)],
                        { type: "application/json" }))

                    edit(id, formData)
                    resetForm()
                    resetFileInput()
                    setPreview(null)
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
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <IconButton color="primary" aria-label="upload picture" component="label">
                                {/* <input hidden accept="image/*" type="file" /> */}
                                <input
                                    hidden
                                    accept="image/*"
                                    size="small"
                                    placeholder="Placeholder"
                                    type="file"
                                    name='image'
                                    inputRef={inputRef}
                                    onChange={(e) => { vistaPrevia(e) }}
                                />
                                <PhotoCamera />
                            </IconButton>
                            {
                                preview ? (
                                    <Box component="div" sx={{ height: "100px", position: "relative" }}>
                                        <img style={{ objectFit: "contain", height: "100px" }} alt="imagen" src={preview} />
                                    </Box>
                                ) : ("no hay imagen seleccionada")
                            }

                        </Box>
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
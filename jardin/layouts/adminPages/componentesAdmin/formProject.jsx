import React from 'react'
import { Box, Input, TextField, Typography, Stack, IconButton } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { useUploadFile } from '../../../context/contextUploadFile';
import UploadFile from './uploadFile';
import { useProject } from '../../../context/contextProject';



const FormProject = ({ title = "", name = "", id = "", biography = "" }) => {

    const { add, loading, getOne, edit } = useProject()

    const { image, resetFileInput } = useUploadFile()
    const formik = useFormik({
        initialValues: {
            data_project: {
                name: name,
                biography: biography,
            }
        },
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData()


            if (id != "") {

                //editar
                if (!image) {
                    //si no envia la imagen se envia la misma                    
                    formData.append("data_project", new Blob([JSON.stringify(values.data_project)],
                        { type: "application/json" }))
                    edit(id, formData)
                    resetForm()
                    resetFormValues()
                    getOne(id)
                }
                else {

                    formData.append("image", new Blob([image], { type: "form-data" }))
                    formData.append("data_project", new Blob([JSON.stringify(values.data_project)],
                        { type: "application/json" }))
                    edit(id, formData)
                    resetForm()
                    resetFormValues()
                    getOne(id)
                }
            }
            else {
                //agregar


            }

            formData.append("image", new Blob([image], { type: "form-data" }))
            formData.append("data_project", new Blob([JSON.stringify(values.data_project)],
                { type: "application/json" }))
            add(formData)
            resetForm()
            resetFileInput()

        }
    });


    return (
        <div>
            <Formik >
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>

                        <UploadFile title={title}></UploadFile>

                        <Stack direction="row" spacing={4}>
                            <TextField
                                size="small"
                                name='data_project.name'
                                label="nombre"
                                variant="filled"
                                value={formik.values.data_project.name}
                                fullWidth={true}
                                onChange={formik.handleChange}
                            />
                        </Stack>
                        <TextField
                            size="small"
                            name='data_project.biography'
                            label="biografia"
                            variant="filled"
                            value={formik.values.data_project.biography}
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
            </Formik>


        </div>
    )
}

export default FormProject
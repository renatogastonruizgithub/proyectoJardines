import React from 'react'
import { TextField, Stack, Switch, FormControlLabel, fabClasses, Box, Typography, } from '@mui/material';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import UploadFile from './uploadFile';
import { useUploadFile } from '../../../context/contextUploadFile';
import { useMobile } from '../../../context/contextMenuMobile';




const FormPublication = ({ biography = "", title, titleUpload, id = "", relevant }) => {

    const { image, resetFileInput } = useUploadFile()
    const { add, loading, edit } = useMobile()
    const [checked, setChecked] = React.useState(true);

    const resetFormValues = () => {
        resetFileInput()
    }
    const changeValueEdit = (event) => {
        setChecked(event.target.checked);
    }


    const formik = useFormik({
        initialValues: {
            data_publication: {
                biography: biography,
                relevant: relevant,
                title: title,
            }
        },
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData()


            if (id != "") {


                //editar
                if (!image) {
                    //si no envia la imagen se envia la misma                    
                    formData.append("data_publication", new Blob([JSON.stringify(values.data_publication)],
                        { type: "application/json" }))
                    edit(id, formData)
                    resetForm()
                    resetFormValues()

                }
                else {

                    formData.append("image", new Blob([image], { type: "form-data" }))
                    formData.append("data_publication", new Blob([JSON.stringify(values.data_publication)],
                        { type: "application/json" }))
                    edit(id, formData)

                    resetForm()
                    resetFormValues()

                }
            }
            else {
                //agregar
                formData.append("image", new Blob([image], { type: "form-data" }))
                formData.append("data_publication", new Blob([JSON.stringify(values.data_publication)],
                    { type: "application/json" }))
                add(formData)
                resetForm()
                resetFormValues()

            }


        }
    });
    return (
        <>
            <Formik >
                <Form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>

                        <UploadFile title={titleUpload}></UploadFile>

                        <Stack direction="row" spacing={4}>
                            <TextField
                                size="small"
                                name='data_publication.title'
                                label="titulo"
                                variant="filled"
                                value={formik.values.data_publication.title}
                                fullWidth={true}
                                onChange={formik.handleChange}
                            />
                            {
                                relevant ? (
                                    <Box>
                                        <Typography variant='subtitle2'>Destacado</Typography>
                                        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography variant='body2'>no</Typography>
                                            <Switch
                                                value={formik.values.data_publication.relevant}
                                                checked={checked}
                                                onChange={formik.handleChange}
                                                onClick={(e) => changeValueEdit(e)}
                                                name="data_publication.relevant" />
                                            <Typography variant='body2'>si</Typography>
                                        </Stack>
                                    </Box>
                                )
                                    : (<FormControlLabel
                                        control={
                                            <Switch
                                                value={formik.values.data_publication.relevant}
                                                onChange={formik.handleChange}
                                                name="data_publication.relevant"
                                            />


                                        }
                                        label="Destacar"
                                    />)
                            }
                        </Stack>


                        <TextField
                            size="small"
                            name='data_publication.biography'
                            label="biografia"
                            variant="filled"
                            value={formik.values.data_publication.biography}
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
        </>
    )
}

export default FormPublication
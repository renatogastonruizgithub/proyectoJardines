import { Container, Grid, Paper, Typography, Button, Stack, Box, Avatar } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useProject } from '../../../context/contextProject'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { useRouter } from 'next/router';
import { UploadFileProvider } from '../../../context/contextUploadFile'
import FormProject from "../../../layouts/adminPages/componentesAdmin/formProject"

const EditProject = () => {

    const { loading, project, getAll, deleted, valuesForm, getOne } = useProject()
    const router = useRouter()

    useEffect(() => {

        if (router.query.id) {
            getOne(router.query.id)
        }

    }, [])

    return (
        <>
            <Container maxWidth="lg" sx={{ marginBottom: "1.5rem", }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                        }}>
                            <Typography variant='h4'>
                                Proyecto:
                                {" "}
                                {valuesForm.name}
                            </Typography>
                            <Button variant="text"><Link href="/admin/proyectos/view">Volver</Link></Button>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ paddingBottom: "4rem", }} >
                <Grid container spacing={5} >
                    <Grid item xs={12} lg={4} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            {

                                project.map((item, empl) => {
                                    return (
                                        <div key={empl}>
                                            <Stack direction="column" spacing={2}>
                                                <Box component="div" sx={{ height: "100px", position: "relative", display: "grid", placeItems: "center" }}>
                                                    {/* <Image style={{ objectFit: "contain" }} alt="asd" src={item.imageUrl} fill sizes="100vw" /> */}
                                                    <Avatar sx={{ width: "100px", height: "100px" }} alt="avatar" src={item.imageUrl} />
                                                </Box>
                                                <Typography>
                                                    {item.name}
                                                </Typography>
                                                <Typography variant='body1'>
                                                    {item.biography}
                                                </Typography>
                                            </Stack>
                                        </div>


                                    )
                                })
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={7} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <UploadFileProvider>
                                <FormProject
                                    name={valuesForm.name}
                                    id={router.query.id}
                                    biography={valuesForm.biography}
                                    title="Cambiar la imagen"
                                >
                                </FormProject>
                            </UploadFileProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default EditProject
EditProject.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
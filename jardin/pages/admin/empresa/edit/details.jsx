import { React, useEffect } from 'react'
import LayoutDashboard from '../../../../layouts/adminPages/layoutDashboard'
import HeaderSections from '../../../../layouts/adminPages/componentesAdmin/headerSections'

import FormCompany from '../../../../layouts/adminPages/componentesAdmin/formCompany'
import { Container, Grid, Avatar, Paper, Typography, Box, Stack, Button } from '@mui/material'
import { useCompany } from '../../../../context/contextCompany'
import { UploadFileProvider } from '../../../../context/contextUploadFile'


const Details = () => {
    const { company, get, valuesForm } = useCompany()

    useEffect(() => {
        get()


    }, [])



    return (
        <div className='contentDashboard'>
            <HeaderSections
                title={"Cambiar los datos de la empresa"}
                textButton="editar"
                form={
                    <UploadFileProvider>
                        <FormCompany
                            titleUpload='cambiar el logo'
                            location={valuesForm.location}
                            names={valuesForm.name}
                            resolution={valuesForm.resolution}
                            biography={valuesForm.biography}
                            schedules={valuesForm.schedules}
                            phone={valuesForm.phone}
                            email={valuesForm.email}
                            linkIg={valuesForm.linkIg}
                            linkFb={valuesForm.linkFb}
                            linkLk={valuesForm.linkLk}
                            mission={valuesForm.mission}
                            vision={valuesForm.vision}
                            id="1"
                        ></FormCompany>
                    </UploadFileProvider>
                }
            >
            </HeaderSections >
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} lg={12} sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}>
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            {

                                company.map((item, comp) => {
                                    return (
                                        <div key={comp}>
                                            <Stack direction="column" spacing={2}>
                                                <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Logo:
                                                    </Typography>

                                                    <Avatar sx={{ width: "50px", height: "50px", marginLeft: ".5rem" }} alt="avatar" src={item.imageUrl} />
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }} >
                                                        Nombre:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }}>
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Ubicacion:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }}>
                                                        {item.location}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Resolucion:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.resolution}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Horarios:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.schedules}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Telefono:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.phone}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        email:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.email}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        link Instagram:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.linkIg}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1'>
                                                        link facebook:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.linkFb}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        link linkendin:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.linkLk}
                                                    </Typography>
                                                </Box>

                                                <Box >
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Biografia:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.biography}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Nuestra vision:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.vision}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body1' sx={{ fontWeight: "700" }}>
                                                        Nuestra mision:
                                                    </Typography>
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.mission}
                                                    </Typography>
                                                </Box>


                                            </Stack>

                                        </div>


                                    )
                                })
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div >
    )
}

export default Details
Details.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
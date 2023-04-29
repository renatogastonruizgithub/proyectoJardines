import { React, useEffect, useState } from 'react'
import { UploadFileProvider } from '../../../context/contextUploadFile'
import HeaderSections from '../../../layouts/adminPages/componentesAdmin/headerSections'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import FormCompany from '../../../layouts/adminPages/componentesAdmin/formCompany'
import { Container, Grid, Avatar, Paper, Typography, Box, Stack, Button } from '@mui/material'
import { useCompany } from '../../../context/contextCompany'
import BadgeIcon from '@mui/icons-material/Badge';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { useRouter } from 'next/router';

const Empresa = () => {
    const router = useRouter()
    const { company, enableButton, get } = useCompany()


    useEffect(() => {
        get()


    }, [])

    console.log(enableButton)
    const handleRouter = () => {
        router.push("/admin/empresa/edit/details")
    }


    return (
        <div className='contentDashboard'>
            <HeaderSections
                title={"Gestion de la empresa"}
                textButton="Agregar"
                button={enableButton}
                form={
                    <UploadFileProvider>
                        <FormCompany titleUpload='Selecciona una imagen'></FormCompany>
                    </UploadFileProvider>
                }
            >
            </HeaderSections>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} lg={4} sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}>
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            {

                                company.map((item, comp) => {
                                    return (
                                        <div key={comp}>
                                            <Stack direction="column" spacing={2}>
                                                <Box component="div" sx={{ height: "100px", position: "relative", display: "grid", placeItems: "center" }}>
                                                    {/* <Image style={{ objectFit: "contain" }} alt="asd" src={item.imageUrl} fill sizes="100vw" /> */}
                                                    <Avatar sx={{ width: "100px", height: "100px" }} alt="avatar" src={item.imageUrl} />
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <BadgeIcon />
                                                    <Typography sx={{ marginLeft: ".5rem" }}>
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <AssuredWorkloadIcon />
                                                    <Typography sx={{ marginLeft: ".5rem" }} variant='body1'>
                                                        {item.resolution}
                                                    </Typography>
                                                </Box>
                                                <Button onClick={handleRouter} sx={{ marginTop: "2rem" }} variant='contained'>Editar</Button>
                                            </Stack>
                                        </div>


                                    )
                                })
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default Empresa
Empresa.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
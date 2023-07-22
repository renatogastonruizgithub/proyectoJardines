import React from 'react'
import LayoutDashboard from './layoutDashboard'
import { Container, Box, Divider, Grid, Paper, Typography, Button, Card, CardContent, CardActions, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { UploadFileProvider } from '../../context/contextUploadFile'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
const LayoutEditDashboard = ({ titleHeader, valuesForm, href, form, dataRender }) => {
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
                                {titleHeader}
                            </Typography>
                            <Button variant="text" startIcon={<ChevronLeftIcon />}><Link href={href}>Volver</Link></Button>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ paddingBottom: "4rem", }} >
                <Grid container spacing={5} >
                    <Grid item xs={12} lg={6} >

                        <Typography sx={{ marginBottom: "1.5rem", }} variant="h5" color="text.secondary">
                            Datos actuales para  {" "}
                            <strong style={{ fontWeight: "bold" }}>{valuesForm}</strong>
                        </Typography>

                        <Paper elevation={5} sx={{ padding: "2rem" }}>
                            {dataRender}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6} >

                        <Typography sx={{ marginBottom: "1.5rem", }} variant="h5" color="text.secondary">
                            Actualiza los datos de {" "}
                            <strong style={{ fontWeight: "bold" }}>{valuesForm}</strong>
                        </Typography>

                        <Paper elevation={5} sx={{ padding: "2rem" }}>

                            <UploadFileProvider>
                                {form}
                            </UploadFileProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default LayoutEditDashboard

LayoutEditDashboard.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
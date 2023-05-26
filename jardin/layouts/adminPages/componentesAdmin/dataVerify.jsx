import { CardMedia, Container, Grid, Box, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LoadingAdmin from "../componentesAdmin/loadingAdmin"

const DataVerify = ({ loading, textLoading, data, children, textNotData }) => {
    return (
        <>
            {
                loading ?

                    <LoadingAdmin title={textLoading}></LoadingAdmin>
                    :
                    (
                        data.length != 0 ?
                            (children)
                            :
                            (
                                < Container maxWidth="lg">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Stack sx={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
                                                <Typography variant="h6">Ups!! debe agregar sus {" " + textNotData}</Typography>
                                                <Box sx={{ position: "relative", height: "400px", width: "100%" }}>
                                                    <Image style={{ objectFit: "contain" }} alt="asd" src="/assets/Nodata.png" fill sizes="100vw" />

                                                </Box>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Container >
                            )
                    )



            }
        </>)
}

export default DataVerify
import React from 'react'
import { useEffect, useState } from "react";
import LayoutDashboard from '../../../../layouts/adminPages/layoutDashboard'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography, Avatar, Stack } from '@mui/material';
import { useEmployeeState } from "../../../../context/contextEmployee"
import FormEmployee from '../../../../layouts/adminPages/componentesAdmin/formEmployee';

const editEmployee = () => {

    const router = useRouter()
    const { oneEmployee, getOne, valuesForm } = useEmployeeState()


    useEffect(() => {
        if (router.query.id) {
            getOne(router.query.id)
        }

    }, [oneEmployee])
    return (<>

        <Container maxWidth="lg" sx={{ marginBottom: "1.5rem" }}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "1rem",
                    }}>
                        <Typography variant='h4'>
                            Empleado:
                            {" "}
                            {valuesForm.name}
                            {" "}
                            {valuesForm.lastName}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="lg" >
            <Grid container spacing={5} >
                <Grid item xs={12} lg={4} >
                    <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                        {

                            oneEmployee.map((item, empl) => {
                                return (
                                    <div key={empl}>
                                        <Stack direction="column" spacing={2}>
                                            <Box component="div" sx={{ height: "100px", position: "relative", display: "grid", placeItems: "center" }}>
                                                {/* <Image style={{ objectFit: "contain" }} alt="asd" src={item.imageUrl} fill sizes="100vw" /> */}
                                                <Avatar sx={{ width: "100px", height: "100px" }} alt="avatar" src={item.imageUrl} />
                                            </Box>
                                            <Typography>
                                                {item.name}
                                                {" "}
                                                {item.last_name}
                                            </Typography>
                                            <Typography>
                                                {item.title}
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
                        <FormEmployee
                            name={valuesForm.name}
                            lastName={valuesForm.lastName}
                            id={router.query.id}
                            biography={valuesForm.biography}
                            title={valuesForm.title}
                            img={valuesForm.img}
                        ></FormEmployee>
                    </Paper>
                </Grid>
            </Grid>
        </Container>




    </>
    )
}

export default editEmployee

editEmployee.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
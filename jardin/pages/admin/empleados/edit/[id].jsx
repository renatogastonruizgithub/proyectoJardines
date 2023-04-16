import React from 'react'
import { useEffect, useState } from "react";
import LayoutDashboard from '../../../../layouts/adminPages/layoutDashboard'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Container, Grid, Paper } from '@mui/material';
import { useEmployeeState } from "../../../../context/contextEmployee"
import FormEmployee from '../../../../components/formEmployee';
import instance from "../../../../config/axios/instance";
const editEmployee = () => {

    const router = useRouter()
    const { employee, getOne, valuesForm } = useEmployeeState()


    useEffect(() => {
        if (router.query.id) {
            getOne(router.query.id)
            /*   const foundEmpl = employee.filter(id => id === router.query.id)
  
              console.log(foundEmpl) */
        }

    }, [])
    return (<>

        <div>editar empleado{valuesForm.name} </div>
        <Container maxWidth="lg" >
            <Grid container spacing={5} >
                <Grid item xs={12} lg={4} >
                    <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                        {

                            employee.map((item, empl) => {
                                return (
                                    <div key={empl}>
                                        <li>{item.name}</li>
                                        <li>{item.last_name}</li>
                                        <li>{item.title}</li>
                                        <li>{item.biography}</li>
                                        <Box component="div" sx={{ height: "100px", position: "relative" }}>
                                            <Image style={{ objectFit: "contain" }} alt="asd" src={item.imageUrl} fill sizes="100vw" />
                                        </Box>

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
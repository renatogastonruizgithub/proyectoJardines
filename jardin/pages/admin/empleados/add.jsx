import React from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { Container, Grid, Typography, Paper, Stack } from '@mui/material';
import FormEmployee from '../../../components/formEmployee';

const Add = () => {

    return (
        <>
            <Container maxWidth="lg" >
                <Grid container sx={{ display: "grid", placeItems: "center" }} >
                    <Grid item xs={12} lg={6} >
                        <Paper elevation={5} sx={{ padding: "2rem", borderRadius: "15px" }}>
                            <FormEmployee

                            ></FormEmployee>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Add
Add.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
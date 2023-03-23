import React from 'react'
import LayoutDashboard from '../layouts/adminPages/layoutDashboard'
import { Container, Grid } from '@mui/material';
const Dashboard = () => {
    return (
        <>
            <LayoutDashboard>
                <section className='mainAdmin'>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item>

                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </LayoutDashboard>
        </>
    )
}

export default Dashboard
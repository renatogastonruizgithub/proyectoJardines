import React, { useEffect } from 'react'
import LayoutDashboard from '../../layouts/adminPages/layoutDashboard'
import { Container, Grid, Box } from '@mui/material'
import FeedHomeGallery from '../../layouts/adminPages/componentesAdmin/feedHomeGallery';
import FeedHomePublications from '../../layouts/adminPages/componentesAdmin/FeedHomePublications';
import FeeDHomeEmployee from '../../layouts/adminPages/componentesAdmin/FeedHomeEmployee';
import FeedHomeProject from '../../layouts/adminPages/componentesAdmin/FeeDHomeProject';


const Dashboard = () => {
    const dataFeed = [
        {
            component: <FeedHomePublications />
        },
        {
            component: <FeedHomeGallery />
        },
        {
            component: <FeeDHomeEmployee />
        },
        {
            component: <FeedHomeProject />
        },
    ]

    return (
        <>
            <section className='mainAdmin'>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {
                            dataFeed.map((feed, fd) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={12} md={3} lg={3}>

                                            {feed.component}


                                        </Grid>
                                    </>
                                )
                            }
                            )
                        }

                    </Grid>

                </Container>
            </section>
        </>
    )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
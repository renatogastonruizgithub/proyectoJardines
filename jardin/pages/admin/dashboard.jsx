import React, { useEffect } from 'react'
import LayoutDashboard from '../../layouts/adminPages/layoutDashboard'
import { useMobile } from '../../context/contextMenuMobile'
import { Container, Grid, Stack, } from '@mui/material'
import PublishIcon from '@mui/icons-material/Publish';
import Mycard from '../../layouts/adminPages/componentesAdmin/card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MyBadge from '../../layouts/adminPages/componentesAdmin/myBadge';
import AvatarGroupC from '../../layouts/adminPages/componentesAdmin/AvatarGroupC';
import { useEmployeeState } from '../../context/contextEmployee';
import PhotoIcon from '@mui/icons-material/Photo';
import FolderIcon from '@mui/icons-material/Folder';
import { useGallery } from '../../context/contexGallery';
import { useProject } from '../../context/contextProject';







const Dashboard = () => {
    const { publish, totalRelevant, totalPublications, getAll } = useMobile()
    const { TotalEmployee, employee, getTotal } = useEmployeeState()
    const { TotalGallery, getGallery, image } = useGallery()
    const { project, TotalProject, getTotalProject } = useProject()

    useEffect(() => {
        getAll()
        getTotal()
        getGallery()
        getTotalProject()
    }, [])


    return (
        <>
            <section className='mainAdmin'>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Mycard
                                href="/admin/publicaciones/view"
                                image={false}
                                body2={
                                    <Stack flexDirection="column" spacing={2}>
                                        <MyBadge icon={<PublishIcon />}
                                            max={totalPublications}
                                            title="Total de publicaciones"
                                            badgeContent={totalPublications}>
                                        </MyBadge>
                                        <MyBadge icon={<FavoriteIcon />}
                                            max={totalRelevant}
                                            title="Total de publicaciones destacadas"
                                            badgeContent={totalRelevant}>
                                        </MyBadge>
                                        <AvatarGroupC data={publish}></AvatarGroupC>
                                    </Stack>
                                }
                                title="Publicaciones"
                            ></Mycard>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Mycard
                                title="Empleados"
                                href="/admin/empleados/view"
                                image={false}
                                body2={
                                    <Stack flexDirection="column" spacing={2}>
                                        <MyBadge icon={<PeopleAltIcon />}
                                            max={TotalEmployee}
                                            title="Total de empleados"
                                            badgeContent={TotalEmployee}>
                                        </MyBadge>
                                        <AvatarGroupC max={4} data={employee}></AvatarGroupC>
                                    </Stack>
                                }

                            ></Mycard>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Mycard
                                title="Proyetos"
                                href="/admin/proyectos/view"
                                image={false}
                                body2={
                                    <Stack flexDirection="column" spacing={2}>
                                        <MyBadge icon={<FolderIcon />}
                                            max={TotalProject}
                                            title="Total de proyectos"
                                            badgeContent={TotalProject}>
                                        </MyBadge>
                                        <AvatarGroupC max={4} data={project}></AvatarGroupC>
                                    </Stack>
                                }

                            ></Mycard>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3}>
                            <Mycard
                                title="Galeria"
                                href="/admin/gallery/viewPhotos"
                                image={false}
                                body2={
                                    <Stack flexDirection="column" spacing={2}>
                                        <MyBadge icon={<PhotoIcon />}
                                            max={TotalGallery}
                                            title="Total de imagenes"
                                            badgeContent={TotalGallery}>
                                        </MyBadge>
                                        <AvatarGroupC max={5} data={image}></AvatarGroupC>
                                    </Stack>
                                }

                            ></Mycard>
                        </Grid>

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
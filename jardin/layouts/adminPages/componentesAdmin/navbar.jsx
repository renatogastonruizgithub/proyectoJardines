import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import props from 'prop-types';
import { Container } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'
import navb from "../../../styles/nabvar.module.scss"
import Switch from '@mui/material/Switch';
import Sidebar from './Sidebar';
import { useState } from "react";
import { useMobile } from "../../../context/contextMenuMobile"
import { ListItemIcon } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import BusinessIcon from '@mui/icons-material/Business';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PhotoIcon from '@mui/icons-material/Photo';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublishIcon from '@mui/icons-material/Publish';

import HomeIcon from '@mui/icons-material/Home';
const NavbarAdmin = () => {

    const { mobileOpen, setMobileOpen } = useMobile();

    const drawerWidth = 240;

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box
            sx={{ height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}

        >
            <Sidebar></Sidebar>

        </Box>
    );

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav">
                        <Toolbar sx={{ backgroundColor: "white", display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                color="#000"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ display: { xs: 'none', md: 'block' }, color: "#000" }}
                            >
                                Logo
                            </Typography>
                            <Stack direction="row" spacing={4}>
                                <Link href="/admin/dashboard" >
                                    <Typography sx={{ display: "grid", placeItems: "center", color: "#000" }}> <HomeIcon />Home</Typography>
                                </Link>
                                <Link href="/admin/publicaciones/view">
                                    <Typography sx={{ display: "grid", placeItems: "center", color: "#000" }} ><PublishIcon />Publicaciones</Typography>
                                </Link>
                                <Link href="/admin/empleados/view" >
                                    <Typography sx={{ display: "grid", placeItems: "center", color: "#000" }}> <PeopleAltIcon />Empleados</Typography>
                                </Link>
                                <Link href="/admin/empresa/empresa">
                                    <Typography sx={{ display: "grid", placeItems: "center", color: "#000" }}><BusinessIcon />Empresa</Typography>
                                </Link>
                                <Link href="/admin/proyectos/view" >
                                    <Typography sx={{ display: "grid", placeItems: "center", color: "#000" }}><FolderIcon />Proyectos</Typography>
                                </Link>
                                <Link href="/admin/gallery/viewPhotos" >
                                    <Typography sx={{ display: "grid", placeItems: "center", color: "#000" }}><PhotoIcon />Galeria</Typography>
                                </Link>
                            </Stack>
                            <Box sx={{ display: { md: 'block' } }}>
                                <Stack direction="row" spacing={1}>

                                    <Switch
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />

                                    <Chip
                                        avatar={<Avatar alt="Natacha" src="/assets/banner.png" />}
                                        label="Avatar"
                                        variant="outlined"
                                    />
                                </Stack>
                            </Box>


                        </Toolbar>
                    </AppBar>
                    <Box component="nav">
                        <Drawer

                            variant="temporary"
                            open={mobileOpen}

                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default NavbarAdmin
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
const NavbarAdmin = () => {
    const drawerWidth = 240;
    const navItems = [{ title: "Home", url: "/" }, { title: "Proyectos", url: "/proyectos" }, { title: "Nosotros", url: "/#nosotros" }, { title: "Galeria", url: "/galeria" }, { title: "Noticias", url: "/noticias" }, { title: "Contactanos", url: "/#contact" }];
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}
            sx={{ height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}

        >
            <List>
                {
                    navItems.map((item, i) => {
                        return (

                            <ListItem key={i} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>

                                    <Link className={navb.linkMobile} href={item.url}>{item.title} </Link>
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <InstagramIcon></InstagramIcon>
                        <FacebookIcon ></FacebookIcon>
                        <LinkedInIcon ></LinkedInIcon>
                    </ListItemButton>
                </ListItem>

            </List>

        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav">
                        <Toolbar sx={{ backgroundColor: "white", display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton
                                color="inherit"
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
                                sx={{ display: { xs: 'block', md: 'block' }, color: "#000" }}
                            >
                                Logo
                            </Typography>

                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                            container={container}
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
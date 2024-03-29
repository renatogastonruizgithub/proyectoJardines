import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
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
import navb from "../styles/nabvar.module.scss"


const Navbar = () => {
    const drawerWidth = 240;
    const navItems = [{ title: "Home", url: "/" }, { title: "Proyectos", url: "/proyectos" }, { title: "Nosotros", url: "/#nosotros" }, { title: "Galeria", url: "/galeria" }, { title: "Noticias", url: "/noticias" }, { title: "Contactanos", url: "/#contact" }];


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
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                sx={{ display: { xs: 'block', md: 'block' } }}
                            >
                                Logo
                            </Typography>

                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                {
                                    navItems.map((items, y) => {
                                        return (
                                            <Button key={y} sx={{ color: '#fff', textTransform: "none", letterSpacing: "1px" }}>

                                                <Link className={navb.link} href={items.url}>{items.title} </Link>
                                            </Button>
                                        )
                                    })
                                }

                            </Box>

                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Button size="small" sx={{ color: '#fff' }} > <InstagramIcon></InstagramIcon></Button>
                                <Button size="small" sx={{ color: '#fff' }} ><FacebookIcon></FacebookIcon></Button>
                                <Button size="small" sx={{ color: '#fff' }} ><LinkedInIcon></LinkedInIcon></Button>
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

export default Navbar

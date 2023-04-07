import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PhotoIcon from '@mui/icons-material/Photo';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublishIcon from '@mui/icons-material/Publish';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/navigation';


const Sidebar = () => {
    const [open, setOpen] = React.useState(true);
    const router = useRouter();

    const handleClick = () => {
        setOpen(!open);
    };

    const Home = () => {
        router.push("/admin/dashboard")
    };
    const Empresa = () => {
        router.push("/admin/empresa/empresa")
    };
    const Empleado = () => {
        router.push("/admin/empleados/empleado")
    };
    const Publicacion = () => {
        router.push("/admin/publicaciones/publicacion")
    };
    const Proyecto = () => {
        router.push("/admin/proyectos/proyecto")
    };
    const Galeria = () => {
        router.push("/admin/gallery/addPhotos")
    };
    const viewPhotos = () => {
        router.push("/admin/gallery/viewPhotos")
    };
    return (
        <>
            <section className='sideBar'>
                <List
                    sx={{ top: "80px", color: "#fff", width: '100%', height: "100vh", maxWidth: 360, bgcolor: 'rgb(74, 125, 196)' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={Home}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton onClick={Empresa}>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary="Empresa" />
                    </ListItemButton>
                    <ListItemButton onClick={Empleado}>
                        <ListItemIcon>
                            <PeopleAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Empleado" />
                    </ListItemButton>
                    <ListItemButton onClick={Publicacion}>
                        <ListItemIcon>
                            <PublishIcon />
                        </ListItemIcon>
                        <ListItemText primary="Publicacion" />
                    </ListItemButton>
                    <ListItemButton onClick={Proyecto}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Proyecto" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <PhotoLibraryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Galeria" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={Galeria} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <AddAPhotoIcon />
                                </ListItemIcon>
                                <ListItemText primary="agregar fotos" />
                            </ListItemButton>
                            <ListItemButton onClick={viewPhotos} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PhotoIcon />
                                </ListItemIcon>
                                <ListItemText primary="ver fotos" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </section>

        </>
    )
}

export default Sidebar
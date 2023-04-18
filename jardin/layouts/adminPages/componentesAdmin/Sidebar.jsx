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
import { useState } from "react";
import { useMobile } from "../../../context/contextMenuMobile"

const Sidebar = () => {
    const { mobileOpen, setMobileOpen } = useMobile();
    const [openItems, setOpenItems] = useState(false);
    const [openItemsEmployee, setOpenItemsEmployee] = useState(false);


    const router = useRouter();

    const handleExpand = () => {
        setOpenItems(!openItems);
    };
    const handleExpandEmployees = () => {
        setOpenItemsEmployee(!openItemsEmployee);
    };

    const Home = () => {
        router.push("/admin/dashboard")
        setMobileOpen(!mobileOpen)
    };
    const Empresa = () => {
        router.push("/admin/empresa/empresa")
        setMobileOpen(!mobileOpen)
    };
    const Empleado = () => {
        router.push("/admin/empleados/empleado")
        setMobileOpen(!mobileOpen)
    };
    const Publicacion = () => {
        router.push("/admin/publicaciones/publicacion")
        setMobileOpen(!mobileOpen)
    };
    const Proyecto = () => {
        router.push("/admin/proyectos/proyecto")
        setMobileOpen(!mobileOpen)
    };
    const Galeria = () => {
        router.push("/admin/gallery/addPhotos")
        setMobileOpen(!mobileOpen)
    };
    const viewPhotos = () => {
        router.push("/admin/gallery/viewPhotos")
        setMobileOpen(!mobileOpen)
    };
    const viewEmployees = () => {
        router.push("/admin/empleados/view")
        setMobileOpen(!mobileOpen)
    };

    return (
        <>

            <List

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
                <ListItemButton onClick={handleExpandEmployees}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Empleado" />
                    {openItemsEmployee ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openItemsEmployee} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton onClick={viewEmployees} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <PhotoIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ver Empleados" />
                        </ListItemButton>
                    </List>
                </Collapse>
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
                <ListItemButton onClick={handleExpand}>
                    <ListItemIcon>
                        <PhotoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Galeria" />
                    {openItems ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openItems} timeout="auto" unmountOnExit>
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


        </>
    )
}

export default Sidebar
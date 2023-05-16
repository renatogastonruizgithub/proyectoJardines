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
import Link from 'next/link'
import { Typography } from '@mui/material';
const Sidebar = () => {
    const { mobileOpen, setMobileOpen } = useMobile();
    const [openItems, setOpenItems] = useState(false);
    const [openItemsEmployee, setOpenItemsEmployee] = useState(false);


    const router = useRouter();

    const handleExpand = () => {
        setOpenItems(!openItems);
    };
    const openAndCLose = () => {

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

    return (
        <>

            <List

                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={openAndCLose}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <Link href="/admin/dashboard" className='links'>
                        <Typography >Home</Typography>
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={openAndCLose}>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <Link href="/admin/empresa/empresa" className='links'>
                        <Typography >Empresa</Typography>
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={openAndCLose}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <Link href="/admin/empleados/view" className='links'>
                        <Typography >Empleado</Typography>
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={openAndCLose}>
                    <ListItemIcon>
                        <PublishIcon />
                    </ListItemIcon>
                    <Link href="/admin/publicaciones/publicacion" className='links'>
                        <Typography >Publicacion</Typography>
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={openAndCLose}>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    <Link href="/admin/proyectos/view" className='links'>
                        <Typography >Proyectos</Typography>
                    </Link>
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
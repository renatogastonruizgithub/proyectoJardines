import React from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
import { Grid, Pagination, Stack, CircularProgress } from '@mui/material';
import geleria from "../styles/galeria.module.scss"
import { BannerLayouts } from '../sections/bannerLayouts'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Galeria() {

    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/galeria?page=${page}`).then((res) => {
            setItemData(res.data)
            setTimeout(() => setLoading(false), 1000)
            console.log(res.data)

        }).catch((error) => {
            console.log(error)
        });
    }, [itemData], [page], [loading]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Galeria"}></BannerLayouts>
                <Box sx={{ marginTop: "5rem", marginBottom: "4rem" }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item xs={12}>
                                {
                                    loading ? (
                                        <Box sx={{ display: "grid", placeItems: "center" }}>
                                            <CircularProgress />
                                        </Box>
                                    ) : (
                                        <ImageList variant="masonry" sx={{
                                            columnCount: {
                                                xs: '1 !important',
                                                sm: '2 !important',
                                                md: '3 !important',
                                                lg: '4 !important',
                                                xl: '5 !important',
                                            },
                                        }} gap={12}>
                                            {itemData.map((item) => (
                                                <ImageListItem className={geleria.imgGaleria} sx={{ position: "relative" }} key={item.img} >
                                                    <img
                                                        className={geleria.imgGaleria}
                                                        src={item.imagen}
                                                        alt={item.alternativo}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    )
                                }

                                <Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                                    <Pagination page={page} onChange={handleChange} count={1} shape="rounded" />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box >


            </LayuotSecondary>
        </>
    )
}

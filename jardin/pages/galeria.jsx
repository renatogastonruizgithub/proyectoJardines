import React, { Suspense } from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/system';
import { Grid, CircularProgress, Stack, Pagination } from '@mui/material';
import geleria from "../styles/galeria.module.scss"
import { BannerLayouts } from '../sections/bannerLayouts'
import { useEffect, useState } from "react";
import axios from "axios";
export default function Galeria() {

    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);
    const [totalPage, setTotalPage] = useState([0]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8080/galeria/page?page=${page}`).then((res) => {

            setItemData(res.data.content)
            setTotalPage(res.data.totalPages)
            setTimeout(() => setLoading(false), 2000)

        }).catch((error) => {
            console.log(error)
        });
    }, [itemData], [page], [loading], [totalPage]);

    const handleChange = (e, value) => {

        setPage(value);
        console.log(value)
    };

    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Galeria"}></BannerLayouts>
                <Box sx={{ marginTop: "5rem", marginBottom: "4rem" }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            {page}
                            <Grid item xs={12}>
                                {
                                    loading ? (
                                        <Box sx={{ display: "grid", placeItems: "center" }}>
                                            <CircularProgress />
                                        </Box>
                                    ) : (<ImageList variant="masonry" sx={{
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
                                                    alt={item.alternativo} />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                    )
                                }


                                <Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                                    <Pagination page={page} onChange={handleChange} count={totalPage - 1} shape="rounded" />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box >


            </LayuotSecondary>
        </>
    )
}

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
    const [CurrentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState();


    useEffect(() => {
        const imgs = async () => {
            const results = await axios.get(`http://localhost:8080/gallery/page?page=${CurrentPage}`).then((res) => {
                setLoading(false)
                setItemData(res.data.content)
                setTotalPages(res.data.totalPages)

            }).catch((error) => {
                console.log(error)
            });
            return results
        }

        imgs()

    }, [CurrentPage], [itemData]);

    const handleChange = (e, value) => {
        setCurrentPage(value - 1);
        setLoading(true)
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
                                    ) : (<ImageList variant="masonry" sx={{
                                        columnCount: {
                                            xs: '1 !important',
                                            sm: '2 !important',
                                            md: '3 !important',
                                            lg: '4 !important',
                                            xl: '5 !important',
                                        },
                                    }} gap={12}>

                                        {itemData.map((itemdata, g) => (
                                            <ImageListItem className={geleria.imgGaleria} sx={{ position: "relative" }} key={g} >
                                                <img
                                                    className={geleria.imgGaleria}
                                                    src={itemdata.image}
                                                    alt={itemdata.alternative} />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                    )
                                }


                                <Stack sx={{ marginTop: "3rem", display: "grid", placeItems: "center" }}>
                                    <Pagination defaultPage={1} onChange={handleChange} count={totalPages} shape="rounded" />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box >


            </LayuotSecondary>
        </>
    )
}

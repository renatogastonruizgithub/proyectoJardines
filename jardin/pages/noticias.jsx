import React from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import { BannerLayouts } from '../sections/bannerLayouts'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { CardMedia, Grid, Card, Stack, Typography, CardContent, CardActions, Button } from '@mui/material';

import { Titles } from '../components/titles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";




const Noticias = () => {

    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Noticias"}></BannerLayouts>

                <Container maxWidth="lg" sx={{ marginTop: "6rem", marginBottom: "4rem" }}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'divider' }}>
                                <Typography variant='h3'>Ultima noticia</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg" sx={{ marginTop: "6rem", marginBottom: "4rem" }}>
                    <Grid container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                        <Grid item xs={12} lg={6}>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <Stack spacing={2}>
                                    <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"titulo  noticia"}></Titles>
                                    <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh erat, accumsan eu dignissim sed, facilisis ac lacus. Integer cursus fringilla ante, at consequat odio feugiat a. Sed euismod suscipit metus, ut hendrerit dui egestas sit amet. Quisque luctus iaculis dui vitae lacinia. Pellentesque quis lacus dapibus, pharetra diam in, pharetra mauris. Aenean rutrum non dolor vel pretium. Praesent mi diam, hendrerit id massa tincidunt, efficitur eleifend mi. Quisque dignissim nunc eu augue pulvinar, ut ultrices sem mattis. Etiam molestie neque et dui sollicitudin, sit amet auctor nisi consectetur. Donec commodo mi eget risus laoreet, sed dictum arcu sollicitudin. Vestibulum nibh lorem, condimentum in urna non, vulputate imperdiet ipsum.</Typography>
                                    <Typography variant='p' > Publicado el 19/03/2023</Typography>
                                </Stack>

                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5} >
                            <Box>
                                <CardMedia component="img" className='imgGolbal'
                                    image="/assets/our.jpg"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg" sx={{ marginTop: "6rem", marginBottom: "6rem" }}>

                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'divider' }}>
                                <Typography variant='h3'>Todas las noticias</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <Box sx={{
                                borderRadius: "7px",
                                position: "relative", backgroundColor: "whitesmoke", display: "flex",
                                alignItems: "center", justifyContent: "center",
                                padding: "2rem"
                            }}>
                                <Swiper
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 50
                                        },
                                        1440: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,

                                        }

                                    }}

                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",

                                    }}
                                    modules={[Autoplay, Navigation]}
                                    initialSlide={0}


                                    className="mySwiper"
                                    centeredSlides={false}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide >
                                        <Card  >
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image="/assets/banner.png"
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "1rem" }}>
                                                    Publicado el 19/03/2023
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Ver noticia</Button>

                                            </CardActions>
                                        </Card >
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Card  >
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image="/assets/banner.png"
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "1rem" }}>
                                                    Publicado el 19/03/2023
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Ver noticia</Button>

                                            </CardActions>
                                        </Card >
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Card  >
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image="/assets/banner.png"
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "1rem" }}>
                                                    Publicado el 19/03/2023
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Ver noticia</Button>

                                            </CardActions>
                                        </Card >
                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <Card  >
                                            <CardMedia
                                                sx={{ height: 140 }}
                                                image="/assets/banner.png"
                                                title="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: "1rem" }}>
                                                    Publicado el 19/03/2023
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Ver noticia</Button>

                                            </CardActions>
                                        </Card >
                                    </SwiperSlide>
                                </Swiper>

                                <div id='nextNews' className="swiper-button-next"></div>
                                <div id='prevNews' className="swiper-button-prev"></div>
                            </Box>

                        </Grid>
                    </Grid>
                </Container>

            </LayuotSecondary>

        </>
    )
}
export default Noticias
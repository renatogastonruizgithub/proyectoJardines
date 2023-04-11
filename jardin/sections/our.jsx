import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import our from '../styles/our.module.scss';
import { Titles } from '../components/titles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import { usePortfolio } from "../context/contextHome"





export const Our = () => {
    const fontSize = "1.3rem"
    const { empresa } = usePortfolio();

    return (
        <>
            <section className={our.contentSection} id="nosotros" >
                <Container maxWidth="lg">
                    {
                        empresa.map((our, indexs) => {
                            return (
                                <div key={indexs} >
                                    <Grid container spacing={10}>
                                        <Grid item md={6}>
                                            <CardContent>
                                                <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={`${our.name}`} ></Titles>
                                                <Typography variant="p" sx={{ fontSize: fontSize }}>
                                                    {our.biography}
                                                </Typography>
                                            </CardContent>

                                        </Grid>
                                        <Grid item md={6} sx={{ width: "100%" }}>
                                            <CardMedia component="img" alt='alt' className={our.containerImg}
                                                image={our.image}
                                            />
                                        </Grid>

                                    </Grid>
                                </div>

                            )

                        })
                    }

                </Container>
                <Container maxWidth="lg" sx={{ paddingTop: "8rem" }}>
                    {
                        empresa.map((empresa, index) => {
                            return (
                                <div key={index}>
                                    <Grid container spacing={10} sx={{ justifyContent: "center" }}>
                                        <Grid item md={4}>
                                            <Card sx={{ backgroundColor: "rgb(114, 181, 247 ,0.5)" }}>
                                                <CardContent>
                                                    <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={"Vision"} ></Titles>
                                                    <Typography variant="p" sx={{ fontSize: fontSize }} >
                                                        {empresa.vision}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Card sx={{ backgroundColor: "rgb(170, 222, 133,0.5)", }}>
                                                <CardContent>
                                                    <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={"Mision"} ></Titles>
                                                    <Typography variant="p" sx={{ fontSize: fontSize }} >
                                                        {empresa.mission}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </div>

                            )
                        })

                    }

                </Container>

                <Container maxWidth="lg">
                    <Grid container sx={{ justifyContent: "center", marginTop: "6rem" }}>

                        <Grid item md={6} xs={12} sx={{ position: "relative" }}>
                            <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h3"} text={"Nuestros profes"} ></Titles>
                            <div className={our.contentSliderTeacher}>

                                <Swiper navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"

                                }}

                                    freeMode={true}
                                    modules={[Autoplay, Navigation]}
                                    initialSlide={0}
                                    centeredSlides={false} className="mySwiper"

                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide className={our.slide}>
                                        <div className={our.contentTextSlider} >
                                            <Image className={our.img} src={"/assets/banner.png"} alt="asd" height={100} width={100} />
                                            <p>Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</p>
                                            <h3>Nombre Apellido</h3>
                                            <span>profesora de musica</span>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className={our.slide}>
                                        <div className={our.contentTextSlider} >
                                            <Image className={our.img} src={"/assets/banner.png"} alt="asd" height={100} width={100} />
                                            <p>Enjoy secret offers up to -70% off the best luxury hotels every Sunday.</p>
                                            <h3>Nombre Apellido</h3>
                                            <span>profesora de musica</span>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div id='nextOur' className="swiper-button-next"></div>
                                <div id='prevOur' className="swiper-button-prev"></div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

            </section>
        </>
    )
}

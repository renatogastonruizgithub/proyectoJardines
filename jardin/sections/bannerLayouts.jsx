import Image from 'next/image'
import React from 'react'
import banner from "../styles/bannerLayouts.module.scss"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export const BannerLayouts = ({ title }) => {
    const itemData = [
        "/assets/secondariBanner.jpg",
    ]
    return (
        <>
            <section className={banner.contenetBanner}>
                <div  >
                    <Breadcrumbs separator="›" color="#fff" sx={{ fontSize: "1.2rem", letterSpacing: "1px" }} aria-label="breadcrumb" >
                        <Link underline="hover" color="#fff" href="/">
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="#fff"
                        >
                            {title}
                        </Link>
                    </Breadcrumbs>
                </div>
                {
                    itemData.map((item, b) =>
                        <Image alt='banner' key={b} src={item} fill="100vw" />
                    )
                }
            </section>
        </>
    )
}

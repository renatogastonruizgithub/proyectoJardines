import Image from 'next/image'
import React from 'react'
import banner from "../styles/bannerLayouts.module.scss"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';


export const BannerLayouts = ({ title }) => {
    const itemData = [
        "/assets/secondariBanner.jpg",
    ]
    const router = useRouter();
    const ir = () => {
        router.push("/")
    }
    return (
        <>
            <section className={banner.contenetBanner}>
                <div  >
                    <Breadcrumbs separator="›" color="#fff" sx={{ fontSize: "1.2rem", letterSpacing: "1px" }} aria-label="breadcrumb" >
                        <Link underline="hover" onClick={ir} sx={{ opacity: ".5" }} color="#fff" href="/">
                            Home
                        </Link>
                        <Link
                            sx={{ textDecoration: "none" }}
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

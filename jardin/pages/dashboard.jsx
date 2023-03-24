import React from 'react'
import { useState } from 'react';
import LayoutDashboard from '../layouts/adminPages/layoutDashboard'
import { Button, Container, Grid, Input } from '@mui/material';
import Image from 'next/image';
import { storage } from "../config/firebase/firebase"
import {

    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";


const Dashboard = () => {

    return (
        <>
            <LayoutDashboard>
                <section className='mainAdmin'>

                </section>
            </LayoutDashboard>
        </>
    )
}

export default Dashboard
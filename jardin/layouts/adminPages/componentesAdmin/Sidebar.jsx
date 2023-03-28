import React from 'react'
import Box from '@mui/material/Box';
import Link from 'next/link';
const Sidebar = () => {
    return (
        <>
            <section className='sideBar'>
                <Link href="/admin/adminGaleria">galeria</Link>
                <Link href="/admin/dashboard">home dashboard</Link>
            </section>

        </>
    )
}

export default Sidebar
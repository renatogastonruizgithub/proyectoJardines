import React from 'react'
import Navbar from './componentesAdmin/navbar'
import Sidebar from './componentesAdmin/Sidebar'

const LayoutDashboard = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <section className='contentAdmin'>
                    <Sidebar></Sidebar>
                    {children}
                </section>

            </main>

        </>
    )
}
export default LayoutDashboard
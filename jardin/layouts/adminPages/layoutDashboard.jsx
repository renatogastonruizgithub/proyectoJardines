import React from 'react'
/* import { ProviderComponentGallery } from '../../context/contexGallery' */
import Navbar from './componentesAdmin/navbar'
import Sidebar from './componentesAdmin/Sidebar'

const LayoutDashboard = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <main >
                <section className='mainAdmin'>
                    <Sidebar></Sidebar>
                    {/*   <ProviderComponentGallery>
                       
                    </ProviderComponentGallery> */}
                    {children}
                </section>

            </main>

        </>
    )
}
export default LayoutDashboard
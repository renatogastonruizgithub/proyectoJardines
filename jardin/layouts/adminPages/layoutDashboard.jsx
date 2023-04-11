import React from 'react'
import { MenuMobileProvider } from '../../context/contextMenuMobile'
/* import { ProviderComponentGallery } from '../../context/contexGallery' */
import Navbar from './componentesAdmin/navbar'
import Sidebar from './componentesAdmin/Sidebar'

const LayoutDashboard = ({ children }) => {
    return (
        <>
            <MenuMobileProvider>
                <Navbar></Navbar>
                <main >
                    <section className='mainAdmin'>
                        <section className='sideBar'>
                            <Sidebar></Sidebar>
                        </section>

                        {/*   <ProviderComponentGallery>
                       
                    </ProviderComponentGallery> */}
                        {children}
                    </section>

                </main>
            </MenuMobileProvider>
        </>
    )
}
export default LayoutDashboard
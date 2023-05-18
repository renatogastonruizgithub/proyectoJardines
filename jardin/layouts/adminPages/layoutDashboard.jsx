import { React, Suspense } from 'react'
import { CompanyProvider } from '../../context/contextCompany'
import { EmployeeProvider } from '../../context/contextEmployee'
import { MenuMobileProvider } from '../../context/contextMenuMobile'
import { ProjectProvider } from '../../context/contextProject'
import { ProviderComponentGallery } from '../../context/contexGallery'
import Navbar from './componentesAdmin/navbar'
import Sidebar from './componentesAdmin/Sidebar'
import Loading from '../../components/loading'

const LayoutDashboard = ({ children }) => {
    return (
        <>
            <MenuMobileProvider>
                <Navbar></Navbar>

                <main >
                    <section className='mainAdmin'>
                        {/*  <section className='sideBar'>
                            <Sidebar></Sidebar>
                        </section> */}
                        <ProviderComponentGallery>
                            <EmployeeProvider>
                                <CompanyProvider>
                                    <ProjectProvider>
                                        {children}

                                    </ProjectProvider>
                                </CompanyProvider>
                            </EmployeeProvider>
                        </ProviderComponentGallery>
                    </section>

                </main>
            </MenuMobileProvider>
        </>
    )
}
export default LayoutDashboard
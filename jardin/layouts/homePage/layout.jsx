import React from 'react'
import Footer from '../../sections/footer'
import Navbar from '../../sections/navbar'
import { ProviderComponent } from "../../context/contextHome";

export const LayoutHome = ({ children }) => {
    return (
        <>

            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <ProviderComponent>
                    <Footer />
                </ProviderComponent>
            </footer>


        </>

    )

}


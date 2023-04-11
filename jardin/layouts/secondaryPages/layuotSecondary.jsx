
import React from 'react'
import { Contact } from '../../sections/contact'
import Footer from '../../sections/footer'
import Navbar from '../../sections/navbar'
import { ProviderComponent } from "../../context/contextHome";

export const LayuotSecondary = ({ children }) => {
    return (
        <>

            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Contact></Contact>
                <ProviderComponent>
                    <Footer />
                </ProviderComponent>

            </footer>

        </>
    )
}

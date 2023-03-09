import React from 'react'
import Footer from '../../sections/footer'
import Navbar from '../../sections/navbar'

export const Layout = ({ children }) => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            <footer>
               <Footer/>
            </footer>
        </>

    )

}


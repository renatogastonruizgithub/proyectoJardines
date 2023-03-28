import React from 'react'
import LayoutDashboard from '../../layouts/adminPages/layoutDashboard'



const Dashboard = () => {

    return (
        <>
            <section className='mainAdmin'>
                Inicio dashboard
            </section>
        </>
    )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
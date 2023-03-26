import React from 'react'
import LayoutDashboard from '../../layouts/adminPages/layoutDashboard'
import AdminGeleria from './adminGaleria';


const Dashboard = () => {

    return (
        <>
            <LayoutDashboard>
                <section className='mainAdmin'>
                    <AdminGeleria></AdminGeleria>
                </section>
            </LayoutDashboard>
        </>
    )
}

export default Dashboard
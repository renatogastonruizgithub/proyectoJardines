import React from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'

const Proyecto = () => {
    return (
        <div>Proyectos</div>
    )
}

export default Proyecto
Proyecto.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
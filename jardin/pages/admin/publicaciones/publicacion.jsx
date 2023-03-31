import React from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'

const Publicacion = () => {
    return (
        <div>Publicaciones</div>
    )
}

export default Publicacion

Publicacion.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
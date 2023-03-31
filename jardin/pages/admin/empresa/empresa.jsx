import React from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'

const Empresa = () => {
    return (
        <div>Empresa</div>
    )
}

export default Empresa
Empresa.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
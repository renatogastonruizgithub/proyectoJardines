import React from 'react'
import LayoutDashboard from "../../../layouts/adminPages/layoutDashboard"

const Empleado = () => {
    return (
        <div>empleados</div>
    )
}

export default Empleado
Empleado.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
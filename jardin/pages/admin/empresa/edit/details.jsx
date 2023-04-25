import React from 'react'
import LayoutDashboard from '../../../../layouts/adminPages/layoutDashboard'

const Details = () => {
    return (
        <div>Details</div>
    )
}

export default Details
Details.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
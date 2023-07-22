import React, { useEffect, useState } from 'react'

import moment from 'moment'

import 'moment/locale/es'  // without this line it didn't work

const DateMoment = ({ date }) => {

    const [fecha, setfecha] = useState("")

    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    /*  const t = new Date(date).toLocaleDateString('es-AR', options) */
    useEffect(() => {
        moment().locale('es')

        setfecha(moment(date).format('L'))



    }, [])




    return (
        <>
            {fecha}
        </>
    )
}

export default DateMoment
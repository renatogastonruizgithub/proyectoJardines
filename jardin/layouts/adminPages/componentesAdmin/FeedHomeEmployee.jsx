
import React, { useEffect } from 'react'
import Mycard from './card'
import { Stack, Typography } from '@mui/material'
import MyBadge from './myBadge'
import AvatarGroupC from './AvatarGroupC'
import { useEmployeeState } from '../../../context/contextEmployee'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const FeeDHomeEmployee = () => {
    const { TotalEmployee, employee, getTotal } = useEmployeeState()

    useEffect(() => {
        getTotal()
    }, [])




    return (
        <>
            <Mycard
                href="/admin/empleados/view"
                image={false}
                body2={
                    <Stack flexDirection="column" spacing={2}>
                        {
                            employee.length > 0 ?
                                (<>
                                    <MyBadge
                                        icon={<PeopleAltIcon />}
                                        max={TotalEmployee}
                                        title="Total de empleados"
                                        badgeContent={TotalEmployee}>
                                    </MyBadge>
                                    <AvatarGroupC data={employee}></AvatarGroupC>
                                </>)
                                :
                                (<>
                                    <Typography>No hay empleados</Typography>
                                </>)
                        }

                    </Stack>
                }
                title="Empleados"
            ></Mycard>

        </>
    )
}

export default FeeDHomeEmployee
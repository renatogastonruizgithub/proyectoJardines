import { Avatar, AvatarGroup, Box } from '@mui/material'
import React from 'react'

const AvatarGroupC = ({ data = [], max }) => {
    return (
        <div>
            <AvatarGroup max={max} sx={{ display: "flex", justifyContent: "start" }}>

                {
                    data.map((itemA, i) => {
                        return (
                            <Box key={itemA.id}>
                                <Avatar alt="Remy Sharp" src={itemA.imageUrl} />
                            </Box>
                        )
                    })
                }


            </AvatarGroup>
        </div>
    )
}

export default AvatarGroupC
import { Box, Badge, Typography } from '@mui/material'
import React from 'react'
const MyBadge = ({ max, badgeContent, title, icon }) => {

    return (
        <div>
            <Box >
                <Typography variant='body2'>{title}</Typography>
                <Badge sx={{ marginTop: "1rem" }} color="secondary" badgeContent={badgeContent} max={max}>
                    {icon}
                </Badge>
            </Box>
        </div>
    )
}

export default MyBadge
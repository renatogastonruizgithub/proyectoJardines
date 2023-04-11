import React from 'react'
import { Box, CircularProgress, Stack } from '@mui/material';
const LoadingAdmin = ({ title }) => {
    return (
        <>
            <Box sx={{
                position: "absolute",
                top: "-3%",
                left: "0",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#e7e7e7",
                width: "100%",
                height: "100vh",
                zIndex: 1000
            }}>
                <Stack sx={{
                    display: "grid",
                    placeItems: "center",
                }}>
                    <span>{title}</span>
                    <CircularProgress sx={{ marginTop: "1rem" }} />
                </Stack>

            </Box>
        </>
    )
}

export default LoadingAdmin
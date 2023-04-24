import React from 'react'
import { Box, Input, TextField, Typography, Stack, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useUploadFile } from '../../../context/contextUploadFile';

const UploadFile = ({ title }) => {

    const { vistaPrevia, preview } = useUploadFile()


    return (
        <>
            <Typography color="GrayText" variant='body1' >{title}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <IconButton color="primary" aria-label="upload picture" component="label">

                    <input
                        hidden
                        accept="image/*"
                        size="small"
                        placeholder="Placeholder"
                        type="file"
                        name='image'
                        onChange={(e) => { vistaPrevia(e) }}
                    />
                    <PhotoCamera />
                </IconButton>
                {
                    preview ? (
                        <Box component="div" sx={{ height: "100px", position: "relative" }}>
                            <img style={{ objectFit: "contain", height: "100px" }} alt="imagen" src={preview} />
                        </Box>
                    ) : ("no hay imagen seleccionada")
                }

            </Box>

        </>
    )
}

export default UploadFile
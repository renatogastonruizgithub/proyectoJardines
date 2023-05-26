import React, { useEffect } from 'react'
import { useGallery } from '../../../context/contexGallery'
import Mycard from './card'
import { Stack, Typography } from '@mui/material'
import MyBadge from './myBadge'
import AvatarGroupC from './AvatarGroupC'
import PhotoIcon from '@mui/icons-material/Photo';



const FeedHomeGallery = () => {
    const { TotalGallery, getGallery, image } = useGallery()

    useEffect(() => {

        getGallery()

    }, [])

    return (
        <>
            <Mycard
                href="/admin/gallery/viewPhotos"
                image={false}
                body2={
                    <Stack flexDirection="column" spacing={2}>
                        {
                            image.length > 0 ?
                                (<>
                                    <MyBadge
                                        icon={<PhotoIcon />}
                                        max={TotalGallery}
                                        title="Total de imagenes"
                                        badgeContent={TotalGallery}>
                                    </MyBadge>
                                    <AvatarGroupC data={image}></AvatarGroupC>
                                </>)
                                :
                                (<>
                                    <Typography>No hay imagenes</Typography>
                                </>)
                        }

                    </Stack>
                }
                title="Galeria"
            ></Mycard>

        </>
    )
}

export default FeedHomeGallery
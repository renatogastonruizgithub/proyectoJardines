import React, { useEffect } from 'react'
import { useMobile } from '../../../context/contextMenuMobile'
import Mycard from './card'
import MyBadge from './myBadge'
import AvatarGroupC from './AvatarGroupC'
import { Stack, Typography } from '@mui/material'
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FeedHomePublications = () => {
    const { publish, totalRelevant, totalPublications, getAll } = useMobile()

    useEffect(() => {
        getAll()

    }, [])


    return (
        <>
            <Mycard
                href="/admin/publicaciones/view"
                image={false}
                body2={
                    <Stack flexDirection="column" spacing={2}>
                        {
                            publish.length > 0 ?
                                (<>
                                    <MyBadge
                                        icon={<PublishIcon />}
                                        max={totalPublications}
                                        title="Total de publicaciones"
                                        badgeContent={totalPublications}>
                                    </MyBadge>
                                    <MyBadge
                                        icon={<FavoriteIcon />}
                                        max={totalRelevant}
                                        title="Total de destacadas"
                                        badgeContent={totalRelevant}>
                                    </MyBadge>
                                    <AvatarGroupC data={publish}></AvatarGroupC>
                                </>)
                                :
                                (<>
                                    <Typography>No hay publicaciones</Typography>
                                </>)
                        }

                    </Stack>
                }
                title="Publicaciones"
            ></Mycard></>
    )
}

export default FeedHomePublications
import React, { useEffect } from 'react'
import Mycard from './card'
import { Stack, Typography } from '@mui/material'
import MyBadge from './myBadge'
import AvatarGroupC from './AvatarGroupC'
import { useProject } from '../../../context/contextProject'
import FolderIcon from '@mui/icons-material/Folder';
const FeedHomeProject = () => {
    const { project, TotalProject, getTotalProject } = useProject()

    useEffect(() => {
        getTotalProject()
    }, [])

    return (
        <>
            <Mycard
                href="/admin/proyectos/view"
                image={false}
                body2={
                    <Stack flexDirection="column" spacing={2}>
                        {
                            project.length > 0 ?
                                (<>
                                    <MyBadge
                                        icon={<FolderIcon />}
                                        max={TotalProject}
                                        title="Total de proyectos"
                                        badgeContent={TotalProject}>
                                    </MyBadge>
                                    <AvatarGroupC data={project}></AvatarGroupC>
                                </>)
                                :
                                (<>
                                    <Typography>No hay proyectos</Typography>
                                </>)
                        }

                    </Stack>
                }
                title="Proyectos"
            ></Mycard>
        </>
    )
}

export default FeedHomeProject
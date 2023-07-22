import { Container, Grid, Paper, Typography, Button, Stack, Box, Avatar } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useProject } from '../../../context/contextProject'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { useRouter } from 'next/router';
import { UploadFileProvider } from '../../../context/contextUploadFile'
import FormProject from "../../../layouts/adminPages/componentesAdmin/formProject"
import LayoutEditDashboard from '../../../layouts/adminPages/layoutEditDashboard'
import Mycard from '../../../layouts/adminPages/componentesAdmin/card'

const EditProject = () => {

    const { loading, project, getAll, deleted, valuesForm, getOne } = useProject()
    const router = useRouter()

    useEffect(() => {

        if (router.query.id) {
            getOne(router.query.id)
        }

    }, [])

    const dataPoject = (
        project.map((item, empl) => {
            return (
                <div key={empl}>
                    <Mycard
                        objectFit="contain"
                        urlIamge={item.imageUrl}
                        title={item.name}
                        body={item.biography}
                    />
                </div>
            )
        })
    )

    const formProject = (
        <FormProject
            name={valuesForm.name}
            id={router.query.id}
            biography={valuesForm.biography}
            title="Cambiar la imagen"
        >
        </FormProject>
    )
    return (
        <>

            <LayoutEditDashboard
                titleHeader="Gestiona tus proyectos"
                href="/admin/proyectos/view"
                valuesForm={valuesForm.name}
                form={formProject}
                dataRender={dataPoject}
            />

        </>
    )
}

export default EditProject
EditProject.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
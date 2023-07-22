import React, { useEffect } from 'react'
import LayoutDashboard from '../../../layouts/adminPages/layoutDashboard'
import { useMobile } from '../../../context/contextMenuMobile'
import { useRouter } from 'next/router'
import { Container, Box, Divider, Grid, Paper, Typography, Button, Card, CardContent, CardActions, IconButton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormPublication from '../../../layouts/adminPages/componentesAdmin/FormPublication'
import { UploadFileProvider } from '../../../context/contextUploadFile'
import LayoutEditDashboard from '../../../layouts/adminPages/layoutEditDashboard'
import Mycard from "../../../layouts/adminPages/componentesAdmin/card"
import DateMoment from '../../../layouts/adminPages/componentesAdmin/DateMoment'



const EditPublication = () => {
    const { getAll, publish, getOne, valuesForm } = useMobile()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        getOne(id)

    }, [publish])

    const form = (
        <FormPublication
            id={id}
            title={valuesForm.title}
            biography={valuesForm.biography}
            titleUpload="Cambia la imagen de la publicacion"
            relevant={valuesForm.relevant}
        >
        </FormPublication>
    )

    const data = (
        publish.map((itemEdit, i) => {
            return (
                <div key={i}>
                    <Mycard
                        objectFit="contain"
                        urlIamge={itemEdit.imageUrl}
                        title={itemEdit.title}
                        body={itemEdit.biography}
                        body2={
                            <Box sx={{ marginTop: "1rem" }}>
                                Publicado el {" "}
                                <DateMoment date={itemEdit.date_creation} />
                            </Box>
                        }
                        bodyActions={
                            <CardActions>
                                {itemEdit.relevant ?
                                    (<><IconButton aria-label="favorito">
                                        <FavoriteIcon sx={{ height: 20, width: 20 }} />
                                    </IconButton> Publicacion destacada </>)
                                    :
                                    null}
                            </CardActions>}
                    />

                </div>
            )
        })

    )

    return (
        <div>

            <LayoutEditDashboard
                titleHeader="Gestiona tus publicaciones"
                href="/admin/publicaciones/view"
                valuesForm={valuesForm.title}
                form={form}
                dataRender={data}
            />
        </div>
    )
}

export default EditPublication
EditPublication.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image';


const Mycard = ({ urlIamge, title, body, body2, href, bodyActions, objectFit, subTittle }) => {
    return (
        <>
            <Card sx={{ Width: "100%" }} >
                {urlIamge &&
                    <CardContent sx={{ position: "relative", height: "140px", width: "100%" }}>
                        <Image style={{ objectFit: objectFit }} alt="asd" src={urlIamge} fill sizes="100vw" />
                    </CardContent>
                }

                <CardContent>
                    <Stack direction="row" sx={{ marginBottom: ".5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography sx={{ marginBottom: "0" }} gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        {
                            href &&
                            <Link href={href} >
                                <IconButton>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Link>
                        }

                    </Stack>
                    <Typography variant="subtitle1" color="text.secondary">
                        {subTittle}
                    </Typography>

                    <Typography sx={{ marginTop: "1rem" }} variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                    <Box>
                        {body2}
                    </Box>

                </CardContent>

                <CardActions>
                    {
                        bodyActions
                    }
                </CardActions>
            </Card>
        </>
    )
}

export default Mycard
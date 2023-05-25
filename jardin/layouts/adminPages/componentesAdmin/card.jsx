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


const Mycard = ({ image, title, body, actions, body2, href }) => {
    return (
        <>
            <Card sx={{ maxWidth: 400 }} >
                {image &&
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                    />
                }

                <CardContent>
                    <Stack direction="row" sx={{ marginBottom: ".5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography sx={{ marginBottom: "0" }} gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Link href={href} >
                            <IconButton>
                                <ArrowForwardIcon />
                            </IconButton>
                        </Link>
                    </Stack>


                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                    <Box>
                        {body2}
                    </Box>
                </CardContent>
                {
                    actions &&
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                }

            </Card>
        </>
    )
}

export default Mycard
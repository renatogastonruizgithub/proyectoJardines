import React from 'react'
import { Box, Button, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';

const HeaderSections = ({ title, form, textButton, button, maxWidth }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12}>
                        <Paper sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                        }}>
                            <Typography variant='h4'>
                                {title}
                            </Typography>
                            {
                                button ?
                                    (<Button

                                        variant="contained"
                                        startIcon={<AddIcon />}
                                        onClick={handleClickOpen}
                                    >
                                        {textButton}
                                    </Button>) : (
                                        ""
                                    )
                            }

                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Modal
                maxWidth={maxWidth}
                fullWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ zIndex: 2050, backgroundColor: "transparent" }}
            >

                <Box sx={{ padding: "3rem", position: "relative" }}>
                    {form}
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        right: ".5rem",
                        top: ".5rem"
                    }}>

                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>

            </Modal>

        </>
    )
}

export default HeaderSections
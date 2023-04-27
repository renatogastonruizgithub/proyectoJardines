import React from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Dialog';


const HeaderSections = ({ title, form, textButton }) => {
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
                            <Button variant="contained"
                                startIcon={<AddIcon />}
                                onClick={handleClickOpen}
                            >
                                {textButton}
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Modal
                maxWidth="md"
                fullWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ zIndex: 2050 }}
            >

                <Box sx={{ padding: "1rem" }}>
                    {form}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={handleClose}>Cerrar</Button>

                </Box>
            </Modal>

        </>
    )
}

export default HeaderSections
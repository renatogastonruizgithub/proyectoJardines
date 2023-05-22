import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Container, Grid, Box } from '@mui/material';

const DataTable = ({ data, loading, columns }) => {
    const [pageSizes, setpageSizes] = React.useState(5)

    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{ height: 400, width: '100%' }}>
                            <DataGrid
                                sx={{
                                    backgroundColor: "#fff",
                                    // disable cell selection style
                                    '.MuiDataGrid-cell:focus': {
                                        outline: 'none'
                                    },
                                    // pointer cursor on ALL rows
                                    '& .MuiDataGrid-row:hover': {
                                        cursor: 'pointer'
                                    }

                                }}
                                rows={data}
                                getRowId={(row) => row.id}
                                loading={loading}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: pageSizes,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5, 10, 25]}
                                onPaginationModelChange={(newPage) => setpageSizes(newPage)}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default DataTable
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DataTable = ({ data }) => {
    return (
        <>
            <TableContainer component={Paper} sx={{ height: 500, overflowY: "scroll" }}>
                <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell >Avatar</TableCell >
                            <TableCell align="right">Nombre</TableCell >
                            <TableCell align="right">Apellido</TableCell >
                            <TableCell align="right">Titulo</TableCell >
                            <TableCell align="right">Biografia</TableCell >
                            <TableCell align="right">Editar</TableCell >
                            <TableCell align="right">Eliminar</TableCell >
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default DataTable
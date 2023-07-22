import React from 'react'
import { useEffect, useState } from "react";
import LayoutDashboard from '../../../../layouts/adminPages/layoutDashboard'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Box, Container, Grid, Paper, Typography, Avatar, Stack, Button } from '@mui/material';
import { useEmployeeState } from "../../../../context/contextEmployee"
import FormEmployee from '../../../../layouts/adminPages/componentesAdmin/formEmployee';
import { UploadFileProvider } from '../../../../context/contextUploadFile';
import Link from 'next/link';
import LayoutEditDashboard from '../../../../layouts/adminPages/layoutEditDashboard';
import Mycard from '../../../../layouts/adminPages/componentesAdmin/card';


const editEmployee = () => {

    const router = useRouter()
    const { oneEmployee, employee, getOne, valuesForm } = useEmployeeState()


    useEffect(() => {
        if (router.query.id) {
            getOne(router.query.id)
        }

    }, [employee])

    const dataEmployee = (
        employee.map((item, empl) => {
            return (
                <div key={empl}>
                    <Mycard
                        objectFit="contain"
                        urlIamge={item.imageUrl}
                        subTittle={item.title}
                        title={item.name + " " + item.last_name}
                        /* body2={item.title} */
                        body={item.biography}
                    />
                </div>


            )
        }))
    const dataFormEmp = (
        <FormEmployee
            name={valuesForm.name}
            lastName={valuesForm.lastName}
            id={router.query.id}
            biography={valuesForm.biography}
            title={valuesForm.title}
            img={valuesForm.img}
            titleUpload="Cambiar la imagen"
        >
        </FormEmployee>
    )

    return (
        <>
            <section className='contentDashboard'>
                <LayoutEditDashboard
                    titleHeader="Gestiona tus empleados"
                    href="/admin/empleados/view"
                    valuesForm={valuesForm.name + " " + valuesForm.lastName}
                    form={dataFormEmp}
                    dataRender={dataEmployee}
                />

            </section>

        </>
    )
}

export default editEmployee

editEmployee.getLayout = function getLayout(page) {
    return (
        <LayoutDashboard>
            {page}
        </LayoutDashboard>
    )
}
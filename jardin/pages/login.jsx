import React, { useState } from 'react';
import {
    Link, Container, Typography, Divider, Stack, Button,
    IconButton, InputAdornment, TextField, Checkbox
} from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import login from "../styles/login.module.scss";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { Formik, Form, useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { axiosAll } from "../config/axios/instaceHome"
import { alertError, alertConfirmation } from "../components/alert"




export default function Login() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const send = () => {
        router.push("/admin/dashboard")
    }
    const recoverPassword = () => {
        router.push("/recover")
    };

    const formik = useFormik({
        initialValues: {

            username: "admin@mail.com",
            password: "ok12345"


        },
        enableReinitialize: true,
        onSubmit: (values, { resetForm }) => {
            axiosAll.post(`auth/signin`, values)
                .then((res) => {

                    if (res.status === 200) {
                        localStorage.setItem("token", res.data.jwt)
                        alertConfirmation("Login exitoso")
                        send()
                    }
                })
                .catch((e) => {

                    router.push("/login")
                    alertError("Contraseña o email incorrectos")
                    resetForm()

                })

        }
    });

    return (
        <>
            <Container className={login.container} maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid className={login.contentImg} item md={6} xs={12}>
                        <div >
                            <Typography variant="h4" gutterBottom>
                                Hola, nos volvemos a ver!
                            </Typography>
                            <Image src={"/assets/illustration_login.png"} alt="asd" width={500}
                                height={400} />
                        </div>
                    </Grid>
                    <Grid className={login.contenFormulario} item md={6} xs={12}>
                        <Container maxWidth="xs">
                            <Typography variant="h4" gutterBottom>
                                Inicia sesion
                            </Typography>

                            <Divider sx={{ my: 3 }}>
                            </Divider>

                            <Formik>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Stack spacing={5}>
                                        <TextField
                                            name="username"
                                            variant="filled"
                                            label="Email"
                                            value={formik.values.username}
                                            fullWidth={true}
                                            onChange={formik.handleChange}
                                        />

                                        <TextField
                                            value={formik.values.password}
                                            fullWidth={true}
                                            onChange={formik.handleChange}
                                            size="small"
                                            name='password'
                                            label="contraseña"
                                            variant="filled"
                                            type={showPassword ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">

                                                            {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Stack>
                                    <LoadingButton
                                        sx={{ marginTop: "2rem" }}
                                        type="submit"
                                        endIcon={<SendIcon />}
                                        /*  loading={loading} */
                                        loadingPosition="end"
                                        variant="contained"
                                    >
                                        <span>Inciar sesion</span>
                                    </LoadingButton>
                                </Form>
                            </Formik>

                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                                <Checkbox name="remember" label="Remember me" />
                                <Link onClick={recoverPassword} variant="subtitle2" underline="hover">
                                    Olvidaste tu contraseña?
                                </Link>
                            </Stack>

                        </Container>

                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

import { Link, Container, Typography, Divider, Stack, Button, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import login from "../styles/login.module.scss";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Login() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const send = () => {
        router.push("/dashbord")
    }
     const recoverPassword = () => {
        router.push("/recover")
    };
    return (
        <>
            <Container className={login.container} maxWidth="lg">
                  <Grid container spacing={5}>
                        <Grid  className={login.contentImg} item md={6} xs={12}>
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

                            <Stack spacing={5}>
                                <TextField name="email" label="Email address" />
                                <TextField
                                    name="password"
                                    label="Password"
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
                            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                                <Checkbox name="remember" label="Remember me" />
                                <Link onClick={recoverPassword} variant="subtitle2" underline="hover">
                                    Olvidaste tu contraseña?
                                </Link>
                            </Stack>
                            <Button fullWidth size="large" type="submit" variant="contained" onClick={send}>
                                Iniciar
                            </Button>
                        </Container>
                            
                        </Grid>
                       
                </Grid>
            </Container>     
        </>
    )
}
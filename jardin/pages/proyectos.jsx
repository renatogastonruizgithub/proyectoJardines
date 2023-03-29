import { Grid, Typography, Stack, CardMedia } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { LayuotSecondary } from '../layouts/secondaryPages/layuotSecondary'
import { BannerLayouts } from '../sections/bannerLayouts'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Titles } from '../components/titles';

const Projectos = () => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, value) => {
        setValue(value);
    };
    return (
        <>
            <LayuotSecondary>
                <BannerLayouts title={"Proyectos"}>
                </BannerLayouts>

                <Container maxWidth="lg">
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Box sx={{ marginTop: "4rem", width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'divider' }}>
                                <Typography variant='h4'>Nuestros proyectos</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ backgroundColor: "#cdeccd", borderRadius: "8px", width: '100%', marginBottom: "5rem", typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList sx={{ backgroundColor: "white" }} variant="scrollable" allowScrollButtonsMobile
                                            scrollButtons="auto" onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab wrapped label="Proyecto uno" value="1" />
                                            <Tab wrapped label="Proyecto dos" value="2" />
                                            <Tab wrapped label="Proyecto tres" value="3" />
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1">
                                        <Grid container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                            <Grid item xs={12} lg={6}>
                                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                                    <Stack spacing={2}>
                                                        <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"Proyecto uno"}></Titles>
                                                        <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh erat, accumsan eu dignissim sed, facilisis ac lacus. Integer cursus fringilla ante, at consequat odio feugiat a. Sed euismod suscipit metus, ut hendrerit dui egestas sit amet. Quisque luctus iaculis dui vitae lacinia. Pellentesque quis lacus dapibus, pharetra diam in, pharetra mauris. Aenean rutrum non dolor vel pretium. Praesent mi diam, hendrerit id massa tincidunt, efficitur eleifend mi. Quisque dignissim nunc eu augue pulvinar, ut ultrices sem mattis. Etiam molestie neque et dui sollicitudin, sit amet auctor nisi consectetur. Donec commodo mi eget risus laoreet, sed dictum arcu sollicitudin. Vestibulum nibh lorem, condimentum in urna non, vulputate imperdiet ipsum.</Typography>
                                                        <Typography variant='p' > Publicado el 19/03/2023</Typography>
                                                    </Stack>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} lg={5} >
                                                <Box>
                                                    <CardMedia component="img" className='imgGolbal'
                                                        image="/assets/our.jpg"
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid></TabPanel>
                                    <TabPanel value="2"><Grid container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                        <Grid item xs={12} lg={6}>
                                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                                <Stack spacing={2}>
                                                    <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"Proyecto dos"}></Titles>
                                                    <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh erat, accumsan eu dignissim sed, facilisis ac lacus. Integer cursus fringilla ante, at consequat odio feugiat a. Sed euismod suscipit metus, ut hendrerit dui egestas sit amet. Quisque luctus iaculis dui vitae lacinia. Pellentesque quis lacus dapibus, pharetra diam in, pharetra mauris. Aenean rutrum non dolor vel pretium. Praesent mi diam, hendrerit id massa tincidunt, efficitur eleifend mi. Quisque dignissim nunc eu augue pulvinar, ut ultrices sem mattis. Etiam molestie neque et dui sollicitudin, sit amet auctor nisi consectetur. Donec commodo mi eget risus laoreet, sed dictum arcu sollicitudin. Vestibulum nibh lorem, condimentum in urna non, vulputate imperdiet ipsum.</Typography>
                                                    <Typography variant='p' > Publicado el 19/03/2023</Typography>
                                                </Stack>

                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} lg={5} >
                                            <Box>
                                                <CardMedia component="img" className='imgGolbal'
                                                    image="/assets/our.jpg"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid></TabPanel>
                                    <TabPanel value="3"><Grid container spacing={10} sx={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
                                        <Grid item xs={12} lg={6}>
                                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                                <Stack spacing={2}>
                                                    <Titles colorTitle={"#000"} color={"#ff3366"} variant={"h4"} text={"Proyecto tres"}></Titles>
                                                    <Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nibh erat, accumsan eu dignissim sed, facilisis ac lacus. Integer cursus fringilla ante, at consequat odio feugiat a. Sed euismod suscipit metus, ut hendrerit dui egestas sit amet. Quisque luctus iaculis dui vitae lacinia. Pellentesque quis lacus dapibus, pharetra diam in, pharetra mauris. Aenean rutrum non dolor vel pretium. Praesent mi diam, hendrerit id massa tincidunt, efficitur eleifend mi. Quisque dignissim nunc eu augue pulvinar, ut ultrices sem mattis. Etiam molestie neque et dui sollicitudin, sit amet auctor nisi consectetur. Donec commodo mi eget risus laoreet, sed dictum arcu sollicitudin. Vestibulum nibh lorem, condimentum in urna non, vulputate imperdiet ipsum.</Typography>
                                                    <Typography variant='p' > Publicado el 19/03/2023</Typography>
                                                </Stack>

                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} lg={5} >
                                            <Box>
                                                <CardMedia component="img" className='imgGolbal'
                                                    image="/assets/our.jpg"
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid></TabPanel>
                                </TabContext>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>


            </LayuotSecondary >
        </>
    )
}
export default Projectos
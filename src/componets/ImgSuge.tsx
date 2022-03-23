import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function imgSuge() {
    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 380,
                    flexGrow: 1,
                    boxShadow: 0,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary" align="left">
                            Sugerencias para ti
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ cursor: 'pointer', color: '#424242' }}>
                            Ver todo
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={-10}>
                    <Grid item>
                        <ButtonBase sx={{ width: 42, height: 42 }}>
                            <Avatar alt="Remy Sharp"
                                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
                                sx={{ width: 42, height: 42 }}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={0}>
                            <Grid item xs={2}>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    placeholderprofile
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    sugerencia para ti
                                </Typography>
                            </Grid>
                            <Grid item>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" component="div" sx={{ cursor: 'pointer', color: '#2196f3' }}>
                                Seguir
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 380,
                    flexGrow: 1,
                    boxShadow: 0,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={-10}>
                    <Grid item>
                        <ButtonBase sx={{ width: 42, height: 42 }}>
                            <Avatar alt="Remy Sharp"
                                src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?cs=srgb&dl=pexels-adrienn-1542085.jpg&fm=jpg"
                                sx={{ width: 42, height: 42 }}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={0}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    placeholderprofile
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    sugerencia para ti
                                </Typography>
                            </Grid>
                            <Grid item>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" component="div" sx={{ cursor: 'pointer', color: '#2196f3' }}>
                                Seguir
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: 380,
                    flexGrow: 1,
                    boxShadow: 0,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={-10}>
                    <Grid item>
                        <ButtonBase sx={{ width: 42, height: 42 }}>
                            <Avatar alt="Remy Sharp"
                                src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?cs=srgb&dl=pexels-andrew-personal-training-697509.jpg&fm=jpg"
                                sx={{ width: 42, height: 42 }}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={0}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    placeholderprofile
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    te sigue
                                </Typography>
                            </Grid>
                            <Grid item>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" component="div" sx={{ cursor: 'pointer', color: '#2196f3' }}>
                                Seguir
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    );
}
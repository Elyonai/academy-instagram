import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ImgProfile() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 400,
        flexGrow: 1,
        boxShadow: 0,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={-10}>
        <Grid item>
          <ButtonBase sx={{ width: 56, height: 56 }}>
            <Avatar alt="Remy Sharp"
            src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?cs=srgb&dl=pexels-spencer-selover-428364.jpg&fm=jpg"
            sx={{ width: 56, height: 56 }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={0}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
                juanitocamelas
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Juan Pablo RM
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component="div" sx={{ cursor: 'pointer', color: '#2196f3' }}>
              Cambiar
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImgProfile from './ImgProfile';
import ImgSuge from './ImgSuge';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SugeComponent() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Box sx={{ minWidth: 400 }}>
      <Grid container spacing={2}>
        <Grid item >
          <ImgProfile/>
          <ImgSuge/>
        </Grid>
      </Grid>
    </Box>
    
  </React.Fragment>
  );
}


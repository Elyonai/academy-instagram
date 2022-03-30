import React from "react";
import Posts from "./Posts/Posts";
import { Grid, Paper } from "@mui/material";
import Container from '@mui/material/Container';

import Stories from "../components/stories";
import Sugerencias from "../componets/Sugerencias";

const Feed = () => {
  return (
    <>
      <Stories />
      <Container maxWidth="md">
      <Paper
        sx={{ backgroundColor: "#FAFAFA", height: "100%", minHeight: "100vh" }}
      >
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={8}>
            <Posts />
          </Grid>
          <Grid item xs={4}>
            <Sugerencias />
          </Grid>
        </Grid>
      </Paper>
      </Container>
    </>
  );
};

export default Feed;

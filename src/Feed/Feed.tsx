import React from "react";
import Posts from "./Posts/Posts";
import { Grid, Paper } from "@mui/material";
import Stories from "../components/stories";
import Sugerencias from "../componets/Sugerencias"

const Feed = () => {
  return (
    <>
      <Stories />
      <Paper
        sx={{ backgroundColor: "#FAFAFA", height: "100%", minHeight: "100vh" }}
      >
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <Posts />
          </Grid>
          <Grid item>
          <Sugerencias />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Feed;

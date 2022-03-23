import React from "react";
import Posts from "./Posts/Posts";
import { Grid, Paper } from "@mui/material";

const Feed = () => {
  return (
    <>
      {/*Aqui va el HEADER*/}
      <Paper
        sx={{ backgroundColor: "#FAFAFA", height: "100%", minHeight: "100vh" }}
      >
        <Grid container justifyContent="flex-end">
          <Grid item xs={8}>
            <Posts />
          </Grid>
          {/* Aqui van las sugerencias*/}
        </Grid>
      </Paper>
    </>
  );
};

export default Feed;

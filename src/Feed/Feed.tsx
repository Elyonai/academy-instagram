import React from "react";
import Posts from "./Posts/Posts";
import { Grid, Paper } from "@mui/material";
import Stories from "../components/stories";

const Feed = () => {
  return (
    <>
      <Stories />
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

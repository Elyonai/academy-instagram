import React from "react";
import CardItem from "./CardItem";
import { Grid } from "@mui/material";
import "./posts.css";

const Posts = () => {
  return (
    <Grid container direction="column" sx={{ flexGrow: 1 }} spacing={5}>
      <Grid item>
        <CardItem />
      </Grid>
      <Grid item>
        <CardItem />
      </Grid>
    </Grid>
  );
};

export default Posts;

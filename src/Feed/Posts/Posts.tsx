import React from "react";
import CardItem from "./CardItem";
import { Grid } from "@mui/material";
import "./posts.css";
import { posts } from "../../data/posts";

const Posts = () => {
  return (
    <Grid container direction="column" sx={{ flexGrow: 1 }} spacing={5}>
      {posts.map((post, index) => (
        <Grid item key={index}>
          <CardItem
            profile={post.profile}
            profileImg={post.profileImg}
            location={post.location}
            imgUrl={post.imgUrl}
            caption={post.caption}
            likes={post.likes}
            comments={post.comments}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

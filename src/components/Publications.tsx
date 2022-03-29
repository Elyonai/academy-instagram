import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../scss/Publications.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Photography } from "./Photo";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Publications() {
  return (
    <>
      <Container sx={{ marginTop: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <Photography />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

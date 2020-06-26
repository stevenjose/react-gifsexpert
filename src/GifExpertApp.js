import React, { useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margen: {
    marginTop: 15,
  },
}));

export const GifExpertApp = () => {
  //const categories = ['One','Second','Tree'];
  const [categories, setCategories] = useState(["paw patrol"]);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2">
          Gif-App
        </Typography>
        <hr />
        <AddCategory setCategories={setCategories} />
        <div className={classes.root}>
          <Grid container spacing={4}>
            {categories.map((category) => {
              return <GifGrid key={category} category={category}></GifGrid>;
            })}
          </Grid>
        </div>
      </Container>
    </>
  );
};

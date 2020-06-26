import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
} from "@material-ui/core";
import CardItem from "./CardItem";
import { getGifs } from "../helpers/getGifs";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: 450,
  },
  media: {
    height: 180,
  },
  margen: {
    marginTop: 25,
  },
});

export const GifGrid = ({ category }) => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then( (imgs) => setImages(imgs));
  }, [ category ]);

  
  return (
    <>
      {images.map((img) => {
        return (
          <>
          <Grid item xl={4} lg={4} xs={12} sm={12} className={classes.margen} key={img.id}>
            <CardItem key={img.id} {...img}></CardItem>
          </Grid>
          </>
        );
      })}
    </>
  );
};

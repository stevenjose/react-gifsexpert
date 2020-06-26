import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import CardItem from "./CardItem";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
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
    textAlign: "center",
    margin: 'auto'
  },
});

export const GifGrid = ({ category }) => {
  const classes = useStyles();
  const { data, loading } = useFetchGifs(category);
  //console.log(state);

  return (
    <>
      <div className={classes.margen}>
        <Grid item xl={4} lg={4} xs={12} sm={12} className={classes.margen}>
          <Typography variant="h4" component="h4">
            { loading && <CircularProgress />  }
          </Typography>
        </Grid>
      </div>
      {data.map((img) => {
        return (
          <>
            <Grid item xl={4} lg={4} xs={12} sm={12} className={classes.margen}>
              <CardItem key={img.id} {...img}></CardItem>
            </Grid>
          </>
        );
      })}
    </>
  );
};

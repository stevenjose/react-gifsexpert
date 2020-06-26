import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 15,
  },
  media: {
    height: 450,
    minHeight:350,
    maxHeight:450,
  },
});

export default function CardItem({id, title, url }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            key= {id}
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

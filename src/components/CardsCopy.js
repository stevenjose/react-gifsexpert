import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  Grid
} from "@material-ui/core";
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 245,
    minWidth: 200,
    minHeight: 300,
    marginTop: 15,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [categorias, setCategories] = useState(['one', 'there']);
  const getGifs = async() => {
    const url = 'http://api.giphy.com/v1/gifs/search?api_key=biZpTaJhj5YsOHN7Arrs9Wz9GNWM959q&q=paw patrol&limit=6';
    const resp = await fetch(url);
    const {data} = await resp.json();
    //console.log(data[0]['images']['downsized_large']['url']);
    //
    const gifs = data.map ( (img) => {
      return{
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });
    setCategories(gifs);
    console.log(gifs);
  }
 
  getGifs();

  return (
    <Grid container spacing={3}>
      {categorias.map((category) => {
        return (
          <div className={classes.root}>
            <Grid item xs={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={category.url}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {category.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
}

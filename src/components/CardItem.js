import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
  avatar: {
    backgroundColor: red[500],
  },
});

export default function CardItem({id, title, url, avatar, fecha }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.root}>


    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R<img src={avatar}></img>
          </Avatar>
        }
        title={title}
        subheader={fecha}
      />
      <CardMedia
        className={classes.media}
        image={url}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>


      {/* <Card className={classes.root}>
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
        </Card> */}
    </div>
  );
}

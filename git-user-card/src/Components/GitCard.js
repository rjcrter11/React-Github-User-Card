import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },

  avatar: {
    backgroundColor: red[500]
  }
}));

function GitCard(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.gitCard.name}
        subheader={props.gitCard.login}
      />
      <CardMedia
        className={classes.media}
        image={props.gitCard.avatar_url}
        title="Github avatar"
      />
      <CardContent>
        <Typography paragraph>Profile: {props.gitCard.html_url} </Typography>
        <Typography paragraph>Location: {props.gitCard.location}</Typography>
        <h5>Followers: </h5>
        {props.followers.map((follower) => (
          <Typography paragraph> {follower.login}</Typography>
        ))}
        <h5>Following: </h5>
        <Typography paragraph>{props.gitCard.following} </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Bio: {props.gitCard.bio}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default GitCard;

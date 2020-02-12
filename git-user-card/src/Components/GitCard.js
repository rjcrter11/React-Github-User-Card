import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
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
    <div className="git-cards">
      <div className="user-card">
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
            <Typography paragraph>
              Profile:
              <a href={props.gitCard.html_url}> {props.gitCard.html_url} </a>
            </Typography>
            <Typography paragraph>
              Location:
              {props.gitCard.location}
            </Typography>

            <Typography paragraph>
              Followers: {props.gitCard.followers}
            </Typography>

            <Typography paragraph>
              Following: {props.gitCard.following}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Bio: {props.gitCard.bio}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <h2>Followers</h2>
      <div className="follower-cards">
        {props.followers.map((follower) => (
          <Card key={follower.id} className={classes.root}>
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
              title={follower.name}
              subheader={follower.login}
            />
            <CardMedia
              className={classes.media}
              image={follower.avatar_url}
              title="Github avatar"
            />
            <CardContent>
              <Typography paragraph>
                Profile:
                <a href={follower.html_url}> {follower.html_url} </a>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default GitCard;

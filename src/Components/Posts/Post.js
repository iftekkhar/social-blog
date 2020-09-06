import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../Posts/Post.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;

  //Post Image Fetching API Link
  let postImage = `https://source.unsplash.com/collection/${parseInt(id) + 50}`;

  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper blog-post">
        <img src={postImage} alt={id}></img>
        <h1>
          <Link to={`/${id}`}>{title} </Link>
        </h1>
        <p>{body}</p>

        <Link to={`/${id}`}>
          <Button variant="contained" color="primary">
            See More
          </Button>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Post;

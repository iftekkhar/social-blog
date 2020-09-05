import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../Posts/Post.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Post = (props) => {
  //   console.log(props);
  return (
    <Grid item xs={12} sm={6}>
      <Paper className="paper">
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>

        <Link to="/Single">
          <Button variant="contained" color="primary">
            See More
          </Button>
        </Link>
      </Paper>
    </Grid>
  );
};

export default Post;

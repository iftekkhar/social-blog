import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import CommentImage from "../Image/CommentImage/CommentImage";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import "../Single/Single.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Single = () => {
  let { id } = useParams();

  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);

  //Comment API Call
  let commentAPI = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  //Single Post API Call
  let postAPI = `https://jsonplaceholder.typicode.com/posts/${id}`;
  //Post Image API Call
  let postImage = `https://source.unsplash.com/collection/${parseInt(id) + 50}/1600x900`;

  useEffect(() => {
    fetch(postAPI)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    fetch(commentAPI)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const { title, body } = posts;

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className="paper ">
            {/*  Full Post Section */}
            <div className="single-post">
              <em>Blog Post Number: {id}</em>
              <h1>{title}</h1>
              <img src={postImage} alt={id}></img>
              <p>{body} </p>
              <Link to={`/`}>
                <Button variant="contained" color="primary">
                  Go Back
                </Button>
              </Link>
            </div>
            {/* Comment-Section */}
            <div className="comment-section">
              <h1>Comments</h1>
              {comments.map((comment) => (
                <div className="comment-single" key={comment.id}>
                  <CommentImage commentID={comment.id}></CommentImage>
                  <Comments comment={comment}></Comments>
                </div>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Single;

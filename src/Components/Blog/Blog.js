import React, { useState, useEffect } from "react";
import Post from "../Posts/Post";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;

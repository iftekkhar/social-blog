import React from "react";
import "../CommentImage/CommentImage.css";

const CommentImage = (props) => {
  const UserAvatarURL = `https://api.adorable.io/avatars/${props.commentID}`;
  return <img className="comment-avatar" src={UserAvatarURL} alt="#"></img>;
};

export default CommentImage;

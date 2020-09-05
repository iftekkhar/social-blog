import React from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Single Blog Page {id}</h1>
    </div>
  );
};

export default Single;

import React from "react";
import { Link, useParams } from "react-router-dom";

export function Post({ posts }) {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  console.log("post before return in Post.js", post);
  console.log("post.id", post.id);
  console.log("params.id", params.id);
  return (
    <div>
      {!post ? (
        <div>Not Found</div>
      ) : (
        <div>
          <div>{post.title}</div>
          <p>{post.content}</p>
        </div>
      )}

      <Link to="/">Go home</Link>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export function Home({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
          <div>
            Published by 🤖 {post.author} on {post.createdAt}
          </div>
        </li>
      ))}
    </ul>
  );
}

import { useEffect, useState } from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";

import "./App.css";

const API =
  "https://gist.githubusercontent.com/braedongough/63d00d3035cbabc468e07c5df713d57a/raw/21e0699bd9f48895d90783b22dc1321c47ef34a6/blob-posts.json";

function Post({ posts }) {
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

function Home({ posts }) {
  console.log("posts before return from Home.js", posts);
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

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log("data inside fetch in App.js", data);
        setPosts(data);
        console.log("posts after setPosts in App.js", posts);
      })
      .catch((error) => console.log("error.message", error.message));
  }, []);

  console.log("posts before return from App.js", posts);

  return (
    <div className="app">
      <h1>HYF MOST Awesome Blog</h1>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route path="/post/:id" component={() => <Post posts={posts} />} />
        <Route path="*">
          <div>404 not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

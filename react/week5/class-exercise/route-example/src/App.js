import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Post } from "./Post";
import { Home } from "./Home";

import "./App.css";

const API =
  "https://gist.githubusercontent.com/braedongough/63d00d3035cbabc468e07c5df713d57a/raw/21e0699bd9f48895d90783b22dc1321c47ef34a6/blob-posts.json";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="app">
      <h1>HYF MOST Awesome Blog</h1>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>

        <Route path="/post/:id" component={<Post posts={posts} />} />
        <Route path="*">
          <div>404 not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

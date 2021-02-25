import React, { useState, useEffect } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  //   console.log("render");

  /*
  useEffect(() => {
    console.log("resource type changed");
  }, [resourceType]);
  */

  /*
  useEffect(() => {
    console.log("on mount");
  }, []);
*/

  useEffect(() => {
    console.log("resource type changed");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    // this is a clean up. Everytime this useEffect is run, whatever is in the return is run first to clean up what we did last time.
    // For example, you want to remove an event listener before adding a new one
    return () => {
      console.log("return from resource type change");
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

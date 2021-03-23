import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const API = "https://fortnite-api.theapinetwork.com/upcoming/get";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;

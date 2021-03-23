import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
      .then((response) => response.json())
      .then((item) => setItem(item));
  }, []);

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt={item.name} />
    </div>
  );
}

export default ItemDetail;

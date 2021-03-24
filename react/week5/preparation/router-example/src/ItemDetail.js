import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetail({ match }) {
  const [item, setItem] = useState();

  useEffect(() => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
      .then((response) => response.json())
      .then((item) => {
        console.log({ item });
        setItem(item.data);
      });
  }, []);

  return (
    <div>
      <h1>{item?.item.name ?? "..."}</h1>
      <img src={item?.item.images.icon} alt={item?.item.name} />
    </div>
  );
}

export default ItemDetail;

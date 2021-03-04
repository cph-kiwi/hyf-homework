import React, { useState, useEffect, useCallback } from "react";

const API_URL = "https://aws.random.cat/meow";

const DataFetching = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cats, setCats] = useState([]);

  const addCat = useCallback(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        const { file } = result;
        // const nextCats = cats.concat(file); // concat creates a new array where push mutates the original array
        // console.log("see state", cats, nextCats); // cats is an empty array and nextCats has one item - so the original array has not changed
        // setCats(nextCats);
        setCats((prev) => {
          return prev.concat(file);
        });
        // console.log("file", file);
        setIsLoading(false);
      });
  }, []); // empty array here means it will only run once - when the conponent mounts

  useEffect(() => {
    // console.log("I mounted");
    addCat();
  }, [addCat]);

  //   console.log("cats", cats);
  return (
    <div>
      <p>I want to fetch some cats</p>
      {isLoading && <div>Loading...</div>}
      {cats.map((cat) => {
        return <img key={cat} src={cat} alt="a cat" width="200" />;
      })}
      <br />
      <button onClick={addCat}>Add cat</button>
    </div>
  );
};

export default DataFetching;

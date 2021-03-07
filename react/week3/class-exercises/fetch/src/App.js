import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://random.dog/woof.json";

function GetDog() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState("No image");

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((image) => {
        setImage(image.url);
      });
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <img src={image} alt="dog" width="400px" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Random dog</h1>
      <GetDog />
    </div>
  );
}

export default App;

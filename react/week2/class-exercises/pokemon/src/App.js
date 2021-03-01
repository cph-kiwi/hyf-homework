import React, { useState, useEffect } from "react";
import "./App.css";

/*
function Pokemon() {
  const [pokemonState, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  if (!pokemonState) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{pokemonState.name}</h1>
      <img
        src={pokemonState.sprites.front_shiny}
        alt={`${pokemonState.name} sprite`}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Pokemon />
    </div>
  );
}

export default App;

*/

function PokemonName({ name }) {
  return <h1>{name}</h1>;
}

function PokemonSprite({ src, name }) {
  return <img src={src} alt={`${name} sprite`} />;
}

// How to pass state down to children
function Pokemon() {
  const [pokemonState, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  if (!pokemonState) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <PokemonName name={pokemonState.name} />
      <PokemonSprite
        src={pokemonState.sprites.front_shiny}
        name={pokemonState.name}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Pokemon />
    </div>
  );
}

export default App;

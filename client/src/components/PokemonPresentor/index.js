import React from "react";
import { useEffect, useState } from "react";

export default function PokemonPresentor({
  pokemonData,
  catchPokemon,
  caught,
}) {
  return (
    <div className="pokemon-wrapper">
      <div className="name">{pokemonData.name}</div>
      <img
        onMouseOver={(e) => {
          e.target.src = `${pokemonData.pictures.back}`;
        }}
        onMouseOut={(e) => {
          e.target.src = `${pokemonData.pictures.front}`;
        }}
        src={pokemonData.pictures.front}
      />
      <div>height:{pokemonData.height}</div>
      <div>weight:{pokemonData.weight}</div>
      <button onClick={() => catchPokemon(pokemonData)}>Catch!</button>
    </div>
  );
}

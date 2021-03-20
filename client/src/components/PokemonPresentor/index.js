import React from "react";
import { useEffect, useState } from "react";

export default function PokemonPresentor({
  pokemonData,
  catchPokemon,
  getTypeInfo,
  caught,
}) {
  // const getPokemonTypes = (pokemonData) => {
  //   const types = [];
  //   pokemonData.types.forEach((type) => {
  //     types.push(type.type.name);
  //   });
  //   return types;
  // };
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
      {/* <div>
        types:
        {getPokemonTypes(pokemonData).map((type) => {
          return (
            <span className="type-span" onClick={() => getTypeInfo(type)}>
              {" "}
              {type}
            </span>
          );
        })}
      </div> */}
      <button
        onClick={(e) => {
          catchPokemon(pokemonData);
          e.target.innerText = "Caught!";
        }}
      >
        Catch!
      </button>
    </div>
  );
}

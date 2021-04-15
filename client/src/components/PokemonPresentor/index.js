import React from "react";
import "./PokemonPresentor.css";
import CatchReleaseButton from "./CatchReleaseButton/index";

export default function PokemonPresentor({
  pokemonData,
  getTypeInfo,
  catchAndRelease,
  getUserCollection,
  PokemonNames,
  sendSearchQuery,
}) {
  const getPokemonTypes = (pokemonData) => {
    const types = [];
    if (!pokemonData.types) {
      types.push("No type!");
    } else {
      pokemonData.types.forEach((type) => {
        types.push(type.type.name);
      });
    }
    return types;
  };
  return (
    <div className="pokemon-wrapper">
      <div id="name">{pokemonData.name}</div>
      {pokemonData.pictures ? (
        <img
          id="poke-image"
          onMouseOver={(e) => {
            e.target.src = `${pokemonData.pictures.back}`;
          }}
          onMouseOut={(e) => {
            e.target.src = `${pokemonData.pictures.front}`;
          }}
          src={pokemonData.pictures.front}
          alt={pokemonData.name}
        />
      ) : (
        <p>This poke is very rare, and hence has yet to've been documented</p>
      )}
      <div className="height-div">Height: {pokemonData.height}</div>
      <div className="width-div">Weight: {pokemonData.weight}</div>
      <div>
        Pokemon Types:
        {getPokemonTypes(pokemonData).map((type) => {
          return (
            <span
              key={type}
              className="type-span"
              onClick={() => getTypeInfo(type)}
            >
              {" "}
              {type}
            </span>
          );
        })}
      </div>
      <CatchReleaseButton
        pokemonData={pokemonData}
        catchAndRelease={catchAndRelease}
        getUserCollection={getUserCollection}
        PokemonNames={PokemonNames}
        sendSearchQuery={sendSearchQuery}
      />
    </div>
  );
}

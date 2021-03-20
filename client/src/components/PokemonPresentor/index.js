import React from "react";
import { useEffect, useState } from "react";
import CatchReleaseButton from "./CatchReleaseButton/index";
import "./PokemonPresentor.css";
export default function PokemonPresentor({
  pokemonData,
  getTypeInfo,
  catchAndRelease,
  getUserCollection,
}) {
  const [isCaught, setIsCaught] = useState(false);
  const getPokemonTypes = (pokemonData) => {
    const types = [];
    // if (!pokemonData.types){
    //   types.push({})
    // } console.log(pokemonData);
    // types.push("No type!");
    // pokemonData.types.forEach((type) => {
    //   types.push(type.type.name);
    // });
    // for (let type of pokemonData.types) {
    //   types.push(type.type.name);
    // }

    return types;
  };
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
      <div className="height-div">height:{pokemonData.height}</div>
      <div className="width-div">weight:{pokemonData.weight}</div>
      <div>
        types:
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
      {isCaught && (
        <button
          onClick={async (e) => {
            await catchAndRelease.release(pokemonData);
            await getUserCollection();
            setIsCaught(false);
          }}
        >
          Release!
        </button>
      )}
      {!isCaught && (
        <button
          onClick={async (e) => {
            await catchAndRelease.catch(pokemonData);
            await getUserCollection();
            setIsCaught(true);
          }}
        >
          Catch!
        </button>
      )}
    </div>
  );
}

import React from "react";
import { useEffect, useState } from "react";

export default function PokemonPresentor({
  pokemonData,
  catchAndRelease,
  getTypeInfo,
  getUserCollection,
}) {
  const [isPokemonCaught, setIsPokemonCaught] = useState(false);
  const isCaught = async (pokemon) => {
    const collection = await getUserCollection();
    if (collection) {
      if (
        collection.filter((item) => item.pokemonId === pokemon.id).length > 0
      ) {
        setIsPokemonCaught(true);
      } else {
        setIsPokemonCaught(false);
      }
    }
  };
  isCaught(pokemonData);
  const getPokemonTypes = (pokemonData) => {
    const types = [];
    pokemonData.types.forEach((type) => {
      types.push(type.type.name);
    });
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
      {isPokemonCaught ||
        ((
          <button
            onClick={(e) => {
              catchAndRelease.catch(pokemonData);
              getUserCollection();
              e.target.innerText = "Caught!";
            }}
          >
            Catch!
          </button>
        ) && (
          <button
            onClick={(e) => {
              catchAndRelease.release(pokemonData);
              getUserCollection();
              e.target.innerText = "Released!";
            }}
          >
            Release :)
          </button>
        ))}
    </div>
  );
}

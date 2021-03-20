import React from "react";
export default function PokemonPresentor({
  pokemonData,
  catchAndRelease,
  getTypeInfo,
}) {
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
      <button
        onClick={(e) => {
          catchAndRelease.catch(pokemonData);
          e.target.innerText = "Caught!";
        }}
      >
        Catch!
      </button>
      <button
        onClick={(e) => {
          catchAndRelease.release(pokemonData);
          e.target.innerText = "Released!";
        }}
      >
        Release :)
      </button>
    </div>
  );
}

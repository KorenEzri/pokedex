import React from "react";

export default function CatchReleaseButton({
  catchAndRelease,
  pokemonData,
  getUserCollection,
  sendSearchQuery,
  PokemonNames,
}) {
  return (
    <button
      onClick={async (e) => {
        !pokemonData.isCaught
          ? await catchAndRelease.catch(pokemonData)
          : await catchAndRelease.release(pokemonData);
        await getUserCollection();
        await sendSearchQuery(PokemonNames[Math.floor(Math.random() * 700)]);
      }}
    >
      {pokemonData.isCaught ? "Release!" : "Catch"}
    </button>
  );
}

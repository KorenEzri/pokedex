import React from "react";

export default function CatchReleaseButton({
  catchAndRelease,
  pokemonData,
  getUserCollection,
}) {
  return (
    <button
      onClick={async (e) => {
        await catchAndRelease.catch(pokemonData);
        pokemonData.isCaught
          ? await catchAndRelease.release(pokemonData)
          : await getUserCollection();
      }}
    >
      {pokemonData.isCaught ? "Release!" : "Catch"}
    </button>
  );
}

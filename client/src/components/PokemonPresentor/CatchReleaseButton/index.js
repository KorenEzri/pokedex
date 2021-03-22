import React from "react";

export default function CatchReleaseButton({
  catchAndRelease,
  pokemonData,
  getUserCollection,
}) {
  return (
    <button
      onClick={async (e) => {
        !pokemonData.isCaught
          ? await catchAndRelease.catch(pokemonData)
          : await catchAndRelease.release(pokemonData);

        await getUserCollection();
      }}
    >
      {pokemonData.isCaught ? "Release!" : "Catch"}
    </button>
  );
}

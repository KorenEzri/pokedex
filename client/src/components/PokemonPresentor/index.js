import React from "react";
import { useEffect, useState } from "react";

export default function PokemonPresentor({ pokemonData }) {
  // const frontOrBack = (bool) => {
  //   if (bool) {
  //     return pokemonData.pictures.back;
  //   } else {
  //     return pokemonData.pictures.front;
  //   }
  // };
  return (
    <div className="pokemon-wrapper">
      <div className="name">{pokemonData.name}</div>
      <div
      // onMouseIn={() => {
      //   frontOrBack(false);
      // }}
      // onMouseOut={() => {
      //   setPokemonPicture(false);
      // }}
      >
        {/* <img src={frontOrBack(pokemonPicture)} /> */}
      </div>
      <div>height:{pokemonData.height}</div>
      <div>weight:{pokemonData.weight}</div>
    </div>
  );
}

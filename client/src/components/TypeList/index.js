import React from "react";
import TypeListItem from "./TypeListItem/index";
import "./TypeList.css";

export default function TypeList({ pokeList, sendSearchQuery }) {
  return (
    <ul id="pokemon-type-list">
      {" "}
      {pokeList.map((pokemon, index) => {
        return (
          <TypeListItem
            pokemon={pokemon.pokeName}
            picture={pokemon.pictures}
            key={index}
            sendSearchQuery={sendSearchQuery}
          />
        );
      })}
    </ul>
  );
}

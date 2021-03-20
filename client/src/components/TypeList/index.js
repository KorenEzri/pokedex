import React from "react";
import TypeListItem from "./TypeListItem/index";

export default function TypeList({ pokeList, sendSearchQuery }) {
  return (
    <ul id="pokemon-type-list">
      {" "}
      {pokeList.map((pokemon, index) => {
        return (
          <TypeListItem
            pokemon={pokemon}
            key={index}
            sendSearchQuery={sendSearchQuery}
          />
        );
      })}
    </ul>
  );
}

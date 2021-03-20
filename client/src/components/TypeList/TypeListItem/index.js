import React from "react";

export default function TypeListItem({ pokemon, index, sendSearchQuery }) {
  return (
    <li
      key={index}
      className="pokemon-list-item"
      onClick={() => {
        sendSearchQuery(pokemon);
      }}
    >
      {pokemon}
    </li>
  );
}

import React from "react";

export default function TypeListItem({
  pokemon,
  index,
  sendSearchQuery,
  picture,
}) {
  return (
    <div>
      <img className="type-pokepic" src={picture} />
      <li
        key={index}
        className="pokemon-list-item"
        onClick={() => {
          sendSearchQuery(pokemon);
        }}
      >
        {pokemon}
      </li>
    </div>
  );
}

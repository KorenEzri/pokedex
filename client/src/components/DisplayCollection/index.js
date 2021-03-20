import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./DisplayCollection.css";

export default ({ userCollection, sendSearchQuery }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {userCollection.map((pokemon, index) => {
          return (
            <div
              onClick={() => {
                sendSearchQuery(pokemon.name);
              }}
              key={index}
            >
              <legend className="pokemon-collection-wrapper">
                {pokemon.name}
                <img src={pokemon.pictures.front} />
              </legend>
              <br></br>
            </div>
          );
        })}
      </ItemsCarousel>
    </div>
  );
};

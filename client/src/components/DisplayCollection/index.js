import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./DisplayCollection.css";
let DisplayCollection;
export default DisplayCollection = ({ userCollection, sendSearchQuery }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const chevronWidth = 40;
  const numberOfCards =
    width > 1070 ? 6 : width > 870 ? 5 : width > 720 ? 4 : 3;
  // window.onresize(() => {
  //   setWidth(window.innerWidth);
  //   console.log("hi");
  // });
  return (
    <div className="collection-div" style={{ padding: `0 ${chevronWidth}px` }}>
      <h1 className="collection-header">collection</h1>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        leftChevron={<button className="carbtn">{"<"}</button>}
        rightChevron={<button className="carbtn">{">"}</button>}
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
              className="kaki"
            >
              <legend className="pokemon-collection-wrapper">
                <p className="name">{pokemon.name}</p>
                <img alt={pokemon.name} src={pokemon.pictures.front} />
              </legend>
              <br></br>
            </div>
          );
        })}
      </ItemsCarousel>
    </div>
  );
};

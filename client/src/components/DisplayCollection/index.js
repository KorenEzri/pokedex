import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./DisplayCollection.css";

export default ({ userCollection }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  console.log(userCollection);
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          {userCollection.map((item, user) => {
            console.log(item);
            return <div>{user.name}</div>;
          })}
        </div>
      </ItemsCarousel>
    </div>
  );
};

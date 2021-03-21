import React from "react";
import "./SearchResult.css";

export default function SearchResult({
  index,
  value,
  sendSearchQuery,
  setSearchResultList,
  picture,
}) {
  console.log(picture);
  return (
    <div>
      <img className="pokePic" src={picture} />
      <li
        key={index}
        className="search-result"
        onClick={() => {
          sendSearchQuery(value);
          setSearchResultList("");
        }}
      >
        {value}
      </li>
    </div>
  );
}

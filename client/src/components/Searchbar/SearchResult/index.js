import React from "react";
import "./SearchResult.css";

export default function SearchResult({
  index,
  value,
  sendSearchQuery,
  setSearchResultList,
  picture,
}) {
  return (
    <div>
      <img className="pokePic" alt={value} src={picture} />
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

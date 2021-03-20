import React from "react";
import "./SearchResult.css";

export default function SearchResult({
  index,
  value,
  sendSearchQuery,
  setSearchResultList,
}) {
  return (
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
  );
}

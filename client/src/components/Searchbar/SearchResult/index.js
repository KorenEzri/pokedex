import React from "react";
import "./SearchResult.css";

export default function SearchResult({ index, value, sendSearchQuery }) {
  return (
    <li
      key={index}
      className="search-result"
      onClick={() => {
        sendSearchQuery(value);
      }}
    >
      {value}
    </li>
  );
}

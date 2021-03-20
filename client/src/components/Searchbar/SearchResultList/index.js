import React from "react";
import SearchResult from "../SearchResult/index";
import "./SearchResultList.css";
export default function SearchResultList({ searchResults, sendSearchQuery }) {
  return (
    <ul className="search-list">
      {searchResults.map((result, index) => {
        return (
          <SearchResult
            key={index}
            value={result}
            sendSearchQuery={sendSearchQuery}
          />
        );
      })}
    </ul>
  );
}

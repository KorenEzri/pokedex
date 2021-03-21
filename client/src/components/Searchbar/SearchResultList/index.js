import React from "react";
import SearchResult from "../SearchResult/index";
import "./SearchResultList.css";
export default function SearchResultList({
  searchResults,
  sendSearchQuery,
  setSearchResultList,
}) {
  if (!searchResults) {
    return <p></p>;
  }
  return (
    <ul className="search-list">
      {searchResults.map((result, index) => {
        return (
          <SearchResult
            key={index}
            value={result.pokeName}
            picture={result.pictures}
            sendSearchQuery={sendSearchQuery}
            setSearchResultList={setSearchResultList}
          />
        );
      })}
    </ul>
  );
}

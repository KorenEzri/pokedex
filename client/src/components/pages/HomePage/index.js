import React from "react";
import { useEffect, useState } from "react";
import network from "../../../network/network";
import PokemonPresentor from "../../PokemonPresentor/index";
import SearchResultList from "../../Searchbar/SearchResultList";
import PokemonNames from "../../Searchbar/pokemonNames";

const searchList = (list, input) => {
  const firstLetterUppercase = (string) => {
    return string
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");
  };
  if (input) {
    let filter = firstLetterUppercase(input);
    const searchResults = [];
    let count = 0;
    list.forEach((pokemonName) => {
      const result = pokemonName.substring(0, input.length);
      if (result === filter && count < 6) {
        searchResults.push(pokemonName);
        count++;
      }
    });
    return searchResults;
  }
};
export default function Homepage() {
  const [textInputValue, setTextInputValue] = useState("");
  const [searchResults, setSearchResultList] = useState([]);
  const [pokemonData, setPokemonData] = useState({});
  const [dest, setDestination] = useState("");
  const [searched, setSearched] = useState(false);
  const baseUrl = `http://localhost:3001/api/${dest}/`;

  const handleResultSuggestions = (searchInput) => {
    const searchSuggestions = searchList(PokemonNames, searchInput);
    setSearchResultList(searchSuggestions);
  };

  const getSearchSuggestions = (searchInput) => {
    setDestination("pokemon");
    const inputValue = searchInput.target.value;
    setTextInputValue(inputValue);
    if (!inputValue) {
      setSearchResultList([]);
      return;
    }
    handleResultSuggestions(inputValue);
  };
  const sendSearchQuery = async (searchInput) => {
    setDestination("pokemon");
    setTextInputValue("");
    try {
      const query = `${baseUrl}${searchInput}`;
      const { data } = await network.get(query);
      setPokemonData(data);
      setSearched("true");
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <div>
      <section id="search-area">
        <input
          type="text"
          placeholder="Search Pokemon"
          id="search-input"
          value={textInputValue}
          onChange={getSearchSuggestions}
        />
        <SearchResultList
          searchResults={searchResults}
          sendSearchQuery={sendSearchQuery}
        />
      </section>
      {searched && (
        <section>
          <PokemonPresentor pokemonData={pokemonData} />
        </section>
      )}
    </div>
  );
}

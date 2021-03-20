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
  const [searched, setSearched] = useState(false);
  const [caught, setCaught] = useState(false);

  const handleResultSuggestions = (searchInput) => {
    const searchSuggestions = searchList(PokemonNames, searchInput);
    setSearchResultList(searchSuggestions);
  };
  const getSearchSuggestions = (searchInput) => {
    const inputValue = searchInput.target.value;
    setTextInputValue(inputValue);
    if (!inputValue) {
      setSearchResultList([]);
      return;
    }
    handleResultSuggestions(inputValue);
  };
  const sendSearchQuery = async (searchInput) => {
    let destination = "pokemon";
    const baseUrl = `http://localhost:3001/api/${destination}/`;
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
  const catchPokemon = async (pokemonData) => {
    let destination = "collection/catch";
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    try {
      pokemonData.isCaught = true;
      const query = `${baseUrl}`;
      await network.post(query, JSON.stringify(pokemonData));
      alert(`${pokemonData.name} added to your collection!`);
      const currentCollection = await getUserCollection();
      console.log(currentCollection);
    } catch ({ message }) {
      console.log(message);
    }
  };
  const getUserCollection = async (user) => {
    let destination = "collection/";
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    const { data } = await network.get(baseUrl);
    return data;
  };

  const getTypeInfo = async (type) => {
    let destination = "type";
    const baseUrl = `http://localhost:3001/api/${destination}/`;

    try {
      const query = `${baseUrl}${type}`;
      console.log(query);
      const { data } = await network.get(query);
      console.log(data.pokemon);
      const pokemons = data.pokemon.map((pokemon) => {
        /*this list should be rendered and presented on the page,
         and every pokemon should have an onClick function that present it with PokemonPresentor  */
        console.log(pokemon.pokemon.name);
      });
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
          <PokemonPresentor
            pokemonData={pokemonData}
            catchPokemon={catchPokemon}
            getTypeInfo={getTypeInfo}
            caught={caught}
          />
        </section>
      )}
    </div>
  );
}

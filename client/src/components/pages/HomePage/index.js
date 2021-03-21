import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Homepage.css";
import { useEffect, useState } from "react";
import network from "../../../network/network";
import PokemonPresentor from "../../PokemonPresentor/index";
import DisplayCollection from "../../DisplayCollection/index";
import SearchResultList from "../../Searchbar/SearchResultList";
import PokemonNames from "../../Searchbar/pokemonNames";
import TypeList from "../../TypeList/index";
require("dotenv").config();

const baseUrl = process.env.PORT || `/api`;
console.log(baseUrl, process.env.PORT);
const searchList = (list, input) => {
  const firstLetterUppercase = (string) => {
    return string
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        if (!word) {
          return;
        }
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
  const [presentingPokemon, setPokePresentation] = useState(false);
  const [typeList, setTypeList] = useState([]);
  const [userCollection, setUserCollection] = useState([]);

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
    const URL = `${baseUrl}/${destination}/`;
    setTextInputValue("");
    try {
      const query = `${URL}${searchInput}`;
      const { data } = await network.get(query);
      const pokeCollection = await getUserCollection();
      const isPokemonCaught = pokeCollection.find(
        (element) => element.name === searchInput.toLowerCase()
      );
      if (isPokemonCaught) {
        data.isCaught = true;
        setPokemonData(data);
      } else {
        setPokemonData(data);
      }
      setPokePresentation("true");
    } catch ({ message }) {
      console.log(message);
    }
  };
  const catchPokemon = async (pokemonData) => {
    let destination = "collection/catch";
    const URL = `${baseUrl}/${destination}/`;
    try {
      const query = `${URL}`;
      const { data } = await network.post(query, pokemonData);
      if (data === "already caught!") {
        return alert(`${pokemonData.name} is ${data}`);
      }
      alert(`you caught ${pokemonData.name}!`);
    } catch ({ message }) {
      console.log(message);
    }
  };
  const releasePokemon = async (pokemonData) => {
    let destination = "collection/release";
    const URL = `${baseUrl}/${destination}/`;
    try {
      const query = `${URL}${pokemonData.id}`;
      await network.delete(query);
      alert(`${pokemonData.name} was released!`);
    } catch ({ message }) {
      console.log(message);
    }
  };
  const getTypeInfo = async (type) => {
    let destination = "type";
    const URL = `${baseUrl}/${destination}/`;
    setPokePresentation(false);
    try {
      const query = `${URL}${type}`;
      const { data } = await network.get(query);
      const pokemonByType = data.pokemon.map((pokemon) => {
        return pokemon.pokemon.name;
      });
      setTypeList(pokemonByType);
    } catch ({ message }) {
      console.log(message);
    }
  };
  const getUserCollection = async (user) => {
    let destination = "collection";
    const URL = `${baseUrl}/${destination}/`;
    const { data } = await network.get(URL);
    console.log(data);
    const userCollectionArray = data.map((pokemonItem) => {
      return pokemonItem.pokemonData;
    });
    setUserCollection(userCollectionArray);
    return userCollectionArray;
  };
  useEffect(() => {
    (async () => {
      try {
        getUserCollection();
      } catch ({ message }) {
        console.log(message);
      }
    })();
  }, []);
  return (
    <div>
      <section id="search-area">
        <input
          type="text"
          placeholder="Search Pokemon"
          id="search-input"
          value={textInputValue}
          onChange={getSearchSuggestions}
          autoComplete="off"
        />
        <SearchResultList
          searchResults={searchResults}
          sendSearchQuery={sendSearchQuery}
          setSearchResultList={setSearchResultList}
        />
      </section>
      {(presentingPokemon && (
        <section className="pokemon-presentor">
          <PokemonPresentor
            pokemonData={pokemonData}
            catchAndRelease={{ catch: catchPokemon, release: releasePokemon }}
            getTypeInfo={getTypeInfo}
            getUserCollection={getUserCollection}
          />
        </section>
      )) || (
        <section id="type-list">
          <TypeList pokeList={typeList} sendSearchQuery={sendSearchQuery} />
        </section>
      )}
      <section id="display-collection">
        <DisplayCollection
          userCollection={userCollection}
          sendSearchQuery={sendSearchQuery}
        />
      </section>
    </div>
  );
}

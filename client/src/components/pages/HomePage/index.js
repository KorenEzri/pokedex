import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect, useState } from "react";
import network from "../../../network/network";
import PokemonPresentor from "../../PokemonPresentor/index";
import DisplayCollection from "../../DisplayCollection/index";
import SearchResultList from "../../Searchbar/SearchResultList";
import PokemonNames from "../../Searchbar/pokemonNames";
import TypeList from "../../TypeList/index";
// const tempArray = [];
// const getAllPics = async () => {
//   for (let pokemon of PokemonNames) {
//     let pName = pokemon.toLowerCase();
//     const { data } = await network.get(
//       `http://localhost:3001/api/pokemon/${pName}`
//     );
//     tempArray.push(data.pictures.front);
//   }
//   console.log(tempArray);
// };
// getAllPics();
// console.log(tempArray);

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
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    setTextInputValue("");
    try {
      const query = `${baseUrl}${searchInput}`;
      const { data } = await network.get(query);
      setPokemonData(data);
      setPokePresentation("true");
    } catch ({ message }) {
      console.log(message);
    }
  };
  const catchPokemon = async (pokemonData) => {
    let destination = "collection/catch";
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    try {
      const query = `${baseUrl}`;
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
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    try {
      const query = `${baseUrl}${pokemonData.id}`;
      await network.delete(query);
      alert(`${pokemonData.name} is released!`);
    } catch ({ message }) {
      console.log(message);
    }
  };
  const getTypeInfo = async (type) => {
    let destination = "type";
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    setPokePresentation(false);
    try {
      const query = `${baseUrl}${type}`;
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
    let destination = "collection/";
    const baseUrl = `http://localhost:3001/api/${destination}/`;
    const { data } = await network.get(baseUrl);
    const userCollectionArray = data.map((pokemonItem) => {
      return pokemonItem.pokemonData;
    });
    setUserCollection(userCollectionArray);
    // return data;
  };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const {
  //         data: { userCollection },
  //       } = await network.get("http://localhost:3001/api/collection/");
  //       setUserCollection(userCollection);
  //     } catch ({ message }) {
  //       console.log(message);
  //     }
  //   })();
  // }, []);

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
        {/* <DisplayCollection userCollection={userCollection} /> */}
      </section>
    </div>
  );
}

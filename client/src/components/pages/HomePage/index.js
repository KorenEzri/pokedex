import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Homepage.css";
import { useEffect, useState } from "react";
import network from "../../../network/network";
import PokemonPresentor from "../../PokemonPresentor/index";
import DisplayCollection from "../../DisplayCollection/index";
import SearchResultList from "../../Searchbar/SearchResultList";
import PokemonNames from "../../Searchbar/pokemonNames";
import pokemonNamesWithPics from "../../Searchbar/pokemonNamesWithPics";
import TypeList from "../../TypeList/index";
import CatchReleaseButton from "../../PokemonPresentor/CatchReleaseButton/index";
import Swal from "sweetalert2";

const baseUrl = process.env.PORT || `http://localhost:3001/api`;
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
    list.forEach((pokemon) => {
      let pokemonName = pokemon.pokeName;
      const result = pokemonName.substring(0, input.length);
      if (result === filter && count < 6) {
        searchResults.push(pokemon);
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

  const handleResultSuggestions = async (searchInput) => {
    const searchSuggestions = searchList(pokemonNamesWithPics, searchInput);
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
      Swal.fire({
        title: `You caught ${pokemonData.name}!`,
        width: 600,
        padding: "3em",
        background: "darkpurple",
        backdrop: `
        rgba(0,0,123,0.4)
        url(caught.gif)
        no-repeat
      `,
      });
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
      Swal.fire({
        title: `${pokemonData.name} was released!`,
        width: 600,
        padding: "3em",
        background: "darkpurple",
        backdrop: `
        rgba(0,0,123,0.4)
        url(caught.gif)
        no-repeat
      `,
      });
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
      const relevantTypeArray = [];
      const typePokeNames = data.pokemon.map((pokemon) => {
        return pokemon.pokemon.name;
      });
      typePokeNames.forEach((typePokemon) => {
        pokemonNamesWithPics.forEach((pokemon) => {
          if (pokemon.pokeName.toLowerCase() === typePokemon) {
            relevantTypeArray.push(pokemon);
          }
        });
      });
      setTypeList(relevantTypeArray);
    } catch ({ message }) {
      console.log(message);
    }
  };
  const getUserCollection = async (user) => {
    let destination = "collection";
    const URL = `${baseUrl}/${destination}/`;
    const { data } = await network.get(URL);
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
        sendSearchQuery(PokemonNames[Math.floor(Math.random() * 786)]);
      } catch ({ message }) {
        console.log(message);
      }
    })();
  }, []);

  useEffect(() => {
    return () => {
      pokemonData.isCaught = !pokemonData.isCaught;
      setPokemonData(pokemonData);
    };
  }, [CatchReleaseButton]);
  return (
    <div>
      <section id="search-area">
        <input
          type="text"
          placeholder="Search Pokemon"
          id="search-input"
          value={textInputValue}
          onBlur={(e) => {
            setTimeout(() => {
              setTextInputValue("");
              setSearchResultList([]);
            }, 50000000);
          }}
          onChange={getSearchSuggestions}
          autoComplete="off"
        />
        <div className="result-container">
          <SearchResultList
            searchResults={searchResults}
            sendSearchQuery={sendSearchQuery}
            setSearchResultList={setSearchResultList}
          />
        </div>
      </section>
      {(presentingPokemon && (
        <section className="pokemon-presentor">
          <PokemonPresentor
            pokemonData={pokemonData}
            catchAndRelease={{ catch: catchPokemon, release: releasePokemon }}
            getTypeInfo={getTypeInfo}
            getUserCollection={getUserCollection}
            PokemonNames={PokemonNames}
            sendSearchQuery={sendSearchQuery}
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

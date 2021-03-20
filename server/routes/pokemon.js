const { Router } = require("express");
const fs = require("fs");
const pokemon = Router();
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");
const { collectionObjectArray } = require("./collection");

const checkIfCaught = (name) => {
  const doesExist = collectionObjectArray.find(
    (pokemon) => pokemon.name === name
  );
  if (doesExist) {
    return true;
  } else {
    return false;
  }
};

pokemon.get("/", (req, res) => {
  res.send("Pokemon route");
});

pokemon.get("/:name", async (req, res) => {
  try {
    const pokemonName = req.params.name.toLowerCase();
    const { data } = await network.get(
      `${pokeAPI_ROUTES.allData}pokemon/${pokemonName}`
    );
    const { name, height, weight, types, sprites, id } = data;
    const doesExist = checkIfCaught(name);
    const responseObject = {
      name,
      isCaught: doesExist,
      height,
      weight,
      types,
      id,
      pictures: {
        front: sprites.front_default,
        back: sprites.back_default,
      },
    };
    res.send(responseObject);
  } catch ({ message }) {
    console.log(message);
  }
});

pokemon.get("/:id", async (req, res) => {
  try {
    const pokemonID = req.params.id;
    const { data } = await network.get(
      `${pokeAPI_ROUTES.allData}pokemon/${pokemonID}`
    );
    const { name, height, weight, type, sprites, id } = data;
    const responseObject = {
      name,
      isCaught: false,
      height,
      weight,
      type,
      id,
      pictures: {
        front: sprites.front_default,
        back: sprites.back_default,
      },
    };
    res.send(responseObject);
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = pokemon;

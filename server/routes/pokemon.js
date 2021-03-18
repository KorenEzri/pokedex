const { Router } = require("express");
const pokemon = Router();
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");
pokemon.get("/", (req, res) => {
  res.send("Pokemon route");
});

pokemon.get("/:name", async (req, res) => {
  try {
    const pokemonName = req.params.name;
    const { data } = await network.get(
      `${pokeAPI_ROUTES.allData}pokemon/${pokemonName}`
    );
    const { name, height, weight, type, sprites } = data;
    const responseObject = {
      name,
      height,
      weight,
      type,
      pictures: {
        front: sprites.front_default,
        back: sprites.back_default,
      },
    };
    res.json(`RECEIVED!, ${JSON.stringify(responseObject)}`);
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = pokemon;

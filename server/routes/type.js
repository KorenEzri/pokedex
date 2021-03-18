const { Router } = require("express");
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");

const type = Router();

type.get("/", (req, res) => {
  res.send("type route");
});

type.get("/:name", async (req, res) => {
  try {
    const pokemonName = req.params.name;
    const address = `${pokeAPI_ROUTES.type}${pokemonName}`;
    console.log(address);
    const { data } = await network.get(`${pokeAPI_ROUTES.type}${pokemonName}`);
    res.json(JSON.stringify(data));
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = type;

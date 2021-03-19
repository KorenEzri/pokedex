const { Router } = require("express");
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");

const type = Router();

type.get("/", (req, res) => {
  res.send("type route");
});

type.get("/:typeName", async (req, res) => {
  try {
    const pokemoType = req.params.typeName;
    const address = `${pokeAPI_ROUTES.type}${pokemoType}`;
    console.log(address);
    const { data } = await network.get(`${pokeAPI_ROUTES.type}${pokemoType}`);
    res.send(data);
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = type;

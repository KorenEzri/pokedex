const { Router } = require("express");

const collection = Router();

collection.get("/", (req, res) => {
  res.send("collection route");
});

// pokemon.post("/catch", async (req, res) => {
//   try {
//     const pokemonName = req.params.name;
//     const { data } = await network.get(pokemonDataLink + pokemonName);
//     const { name, height, weight, type, sprites } = data;
//     const responseObject = {
//       name,
//       height,
//       weight,
//       type,
//       sprites,
//     };
//     res.json(`RECEIVED!, ${JSON.stringify(responseObject)}`);
//   } catch ({ message }) {
//     console.log(message);
//   }
// });

module.exports = collection;

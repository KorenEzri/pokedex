const { Router } = require("express");
const fs = require("fs");
const pokemon = Router();
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");
pokemon.get("/", (req, res) => {
  res.send("Pokemon route");
});

// const validatePokemonID = async (pokemonID) => {
//   const filePath = `./pokemon-ids.json`
//   // {id: 132, name:ditto }
//   const storedPokemonIDS = fs.readFile(filePath, `utf8`, (err, data) => {
//     if(!err){
//       return data;
//     } else{
//       console.log(err);
//     }
//     const pokemonIDInStorage  = data.filter((pokeObject =>{
//       pokeObject.id === pokemonID
//     })) || false
//     if (pokemonIDInStorage) {

//     }
//   })
// }

pokemon.get("/:name", async (req, res) => {
  try {
    const pokemonName = req.params.name.toLowerCase();
    const { data } = await network.get(
      `${pokeAPI_ROUTES.allData}pokemon/${pokemonName}`
    );
    const { name, height, weight, types, sprites, id } = data;
    const responseObject = {
      name,
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

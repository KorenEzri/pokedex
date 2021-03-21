const { Router } = require("express");
const Pokemon = require("../models/PokeCollection");
const pokemon = Router();
const { network, pokeAPI_ROUTES } = require("../utils/pokeAPI");

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
    console.log(messsage);
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

// pokemon.post("/pictures", async (req, res) => {
//   const pictureArray = [];
//   try {
//     const names = req.body;
//     let onlyPictures = names.forEach(async (pokemonName) => {
//       const query = `${
//         pokeAPI_ROUTES.allData
//       }pokemon/${pokemonName.toLowerCase()}`;
//       const { data } = await network.get(query);
//       pictureArray.push({
//         pokeName: pokemonName,
//         pictures: data.sprites.front_shiny,
//       });
//       if (pictureArray.length > 777) {
//         res.send(JSON.stringify(pictureArray));
//       } else {
//         console.log(pictureArray.length);
//         if (pictureArray.length > 776) {
//           console.log(pictureArray);
//         }
//       }
//     });
//   } catch ({ message }) {
//     console.log(message);
//   }
// });

pokemon.get("*", function (req, res) {
  res.status(404).redirect("/404");
});

module.exports = pokemon;

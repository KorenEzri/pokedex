const { Router } = require("express");
const bodyParser = require("body-parser");
const Pokemon = require("../models/PokeCollection");
const collection = Router();
const defaultCollectionID = "60555b1877c4960818e288c6";
collection.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
collection.use(bodyParser.json());

collection.get("/", async (req, res) => {
  const pokemonCollection = await Pokemon.find({});
  res.send(pokemonCollection);
});

collection.post("/catch", async (req, res) => {
  try {
    const data = req.body;
    const pokemonName = data.pokemonData.name;
    const newPokemon = new Pokemon({
      pokemonId: data.id,
      pokemonData: data.pokemonData,
    });
    await newPokemon.save();
    // await Pokemon.findByIdAndUpdate(
    //   { _id: defaultCollectionID },
    //   { $push: { pokemonCollection: newPokemon } },
    //   { new: true }
    // );
    res.send(`Added ${pokemonName} to your collection!`);
  } catch ({ message }) {
    console.log(message);
  }
});

// collection.delete("/release/:id", async (req, res) => {
//   try {
//     const pokemonID = req.params.id;
//     const updatedCollectionArray = collectionObjectArray.filter(
//       (pokemonObject) => pokemonObject.id !== Number(pokemonID)
//     );
//     collectionObjectArray = updatedCollectionArray;
//     res.send(collectionObjectArray);
//   } catch ({ message }) {
//     console.log(message);
//   }
// });

module.exports = { collection };

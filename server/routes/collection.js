const { Router } = require("express");
const bodyParser = require("body-parser");
const collection = Router();
let collectionObjectArray = [];

collection.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
collection.use(bodyParser.json());

collection.get("/", (req, res) => {
  res.send(collectionObjectArray);
});

collection.post("/catch", async (req, res) => {
  try {
    const data = req.body;
    const pokemonName = data.name;
    collectionObjectArray.push({ id: data.id, pokemonData: data });
    res.send(
      `Added ${pokemonName} to your collection! Your collection is: ${JSON.stringify(
        collectionObjectArray
      )}`
    );
  } catch ({ message }) {
    console.log(message);
  }
});

collection.delete("/release/:id", async (req, res) => {
  try {
    const pokemonID = req.params.id;
    const updatedCollectionArray = collectionObjectArray.filter(
      (pokemonObject) => pokemonObject.id !== Number(pokemonID)
    );
    collectionObjectArray = updatedCollectionArray;
    res.send(collectionObjectArray);
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = { collection, collectionObjectArray };

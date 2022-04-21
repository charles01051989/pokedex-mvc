const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 001,
    nome: "Bulbassaur",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
  {
    id: 002,
    nome: "Charmander",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 003,
    nome: "Butterfree",
    descricao:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    tipo: "Bug",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
  },
  {
    id: 004,
    nome: "Nidorino",
    descricao:
      "With a horn that’s harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone",
    tipo: "Poison",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
  }
];

//Rotas
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon)
  
  res.redirect("/");
  
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000 ")
);

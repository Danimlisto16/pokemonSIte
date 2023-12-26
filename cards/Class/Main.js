import pokemonCard from './pokemonCard.js';
import Pokemon from "./Pokemon.js";

var pokemonList = [];

async function fetchPokemonData() {
   const url = "https://pokeapi.co/api/v2/pokemon/";
   const limit = 248;
   for (let i = 1; i <= limit; i++) {
      try {
         var response = await fetch(url + i);
         if (!response.ok) {
            throw new Error(`HTTP error! Status code ${response.status}`);
         }
         const data = await response.json();
         let name = data.name;
         let abilities = data.abilities[0].ability.name;
         let moves = data.moves[0].move.name;
         let experience = data.base_experience;
         let types = data.types[0].type.name;
         let height = data.height;
         let img = data.sprites.front_default;
         // console.log(name +" "+ abilities+" "+moves+" "+experience+" "+types);
         const poke = new Pokemon(
            name,
            abilities,
            moves,
            img,
            height,
            experience,
            types
         );
         pokemonList.push(poke);
      } catch (error) {
         console.error("Error:", error);
      }
   }
}

async function main() {
   await fetchPokemonData();
   for (let i = 0; i < pokemonList.length; i++) {
      const pokeCard = new pokemonCard(
         pokemonList[i].name,
         pokemonList[i].img,
         pokemonList[i].abilities,
         pokemonList[i].moves,
         pokemonList[i].height,
         pokemonList[i].experience,
         pokemonList[i].types
      );
      const card = pokeCard.createPokemonCard();
      const pokemonContainer = document.getElementById("rowpoke");
      pokemonContainer.appendChild(card);
   }
}

main();

const fs = require("fs");

var pokemonList = [];

class Pokemon {
   constructor(name, abilities, moves, img, height, experience, types) {
      this.name = name;
      this.abilities = abilities;
      this.moves = moves;
      this.img = img;
      this.height = height;
      this.experience = experience;
      this.types = types;
   }


static async fetchData() {
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
         //  console.log(name +" "+ abilities+" "+moves+" "+experience+" "+types);
         var poke = new Pokemon(
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

}

async function  main(){
    await Pokemon.fetchData();
    const jsonString = JSON.stringify(pokemonList,null ,2 );
    const filePath = "../Data/PokemonData.json";
    
    fs.writeFile(filePath,jsonString,'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("JSON data has been written to", filePath);
        }
    });
}

main();

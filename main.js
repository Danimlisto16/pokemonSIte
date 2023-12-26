
var pokeIndex = 0;
var pokemonJsonList = null;
var pokeInfo = null;

async function getApiValues(){
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        pokemonJsonList = await response.json(); 
        document.getElementById("poke-preview").innerHTML = " Data  loaded  successfully";
        console.log(pokemonJsonList)
        
    } catch (error) {
        console.error('Error:', error);
        return null; // Handle error gracefully
    }
}

function getPokeNameById(index){
  return pokemonJsonList.results[index].name
}

function updatePreview(pokeIndex){
  document.getElementById("poke-preview").innerHTML = " Preview Pokemon: # " + pokeIndex +" "+getPokeNameById(pokeIndex);
}

function increasePokeIndex(){
  if (pokeIndex < 248){
    pokeIndex++;
    updatePreview(pokeIndex);
  }
    
}

function decreasePokeIndex(){
  if (pokeIndex > 0){
    pokeIndex--;
    updatePreview(pokeIndex);
  }
    
}

async function getPokeInfo(pokeName){
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/'+pokeName;
  try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        pokeInfo = await response.json(); 
        console.log(pokeInfo);
        
    } catch (error) {
        console.error('Error:', error);
        return null; // Handle error gracefully
    }
}

async function writeInfo(){

  await getPokeInfo(getPokeNameById(pokeIndex));
  console.log(pokeInfo);
  let name = getPokeNameById(pokeIndex);
  let abilitie = pokeInfo.abilities[0].ability.name;
  let move = pokeInfo.moves[0].move.name;
  let experience = pokeInfo.base_experience;
  let types = pokeInfo.types[0].type.name;
  let heigth = pokeInfo.height;

  document.getElementById("poke-img").src = pokeInfo.sprites.front_default;
  document.getElementById("poke-name").innerHTML = "Name: "+name;
  document.getElementById("poke-move").innerHTML = "Move: "+move;
  document.getElementById("poke-abilitie").innerHTML = "Abilitie: "+abilitie;
  document.getElementById("poke-experience").innerHTML = "Based Experience: "+experience;
  document.getElementById("poke-types").innerHTML = "Types: "+types;
  document.getElementById("poke-height").innerHTML = "Height: "+heigth+ " INCH' ";
}



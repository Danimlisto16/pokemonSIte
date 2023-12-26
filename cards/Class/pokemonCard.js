class pokemonCard {
   name = "";
   imgSrc = "";
   abilities;
   moves = "";
   height = 0;
   experience = "";
   types = "";

   constructor(name, imgSrc, abilities, moves, height, experience, types) {
      (this.name = name),
         (this.imgSrc = imgSrc),
         (this.abilities = abilities),
         (this.moves = moves),
         (this.height = height),
         (this.experience = experience),
         (this.types = types);
   }

   createPokemonCard() {
      // Create outer div with class "col-md-4"
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-md-4");

      // Create card div with styles and classes
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      cardDiv.style.width = "18rem";

      // Create card image
      const img = document.createElement("img");
      img.src = this.imgSrc;
      img.classList.add("card-img-top");
      img.alt = "Pokemon Image";

      // Create card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      // Create card title (Name)
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = this.name;

      // Create card text (Pokemon!)
      const text = document.createElement("p");
      text.classList.add("card-text");
      text.textContent = "Pokemon!";

      // Create list group for abilities, moves, height, experience, types
      const listGroup = document.createElement("ul");
      listGroup.classList.add("list-group", "list-group-flush");

      const listItems = [
         "Abilities: " + this.abilities,
         "Moves: " + this.moves,
         "Height: " + this.height,
         "Experience: " + this.experience,
         "Types: " + this.types,
      ];

      listItems.forEach((itemText) => {
         const listItem = document.createElement("li");
         listItem.classList.add("list-group-item");
         listItem.textContent = itemText;
         listGroup.appendChild(listItem);
      });

      // Append elements to their respective parents
      cardBody.appendChild(title);
      cardBody.appendChild(text);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBody);
      cardDiv.appendChild(listGroup);
      colDiv.appendChild(cardDiv);

      return colDiv;
   }
}

export default pokemonCard;

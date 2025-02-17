// let URL = "https://pokeapi.co/api/v2/pokemon/";

// //For para recorrer el JSON
// for (let i = 1; i < 151; i++) {
//     fetch(URL + i)
//         .then((response) => response.json()) //esto nos permite convertir la respuesta a json
//         .then(data => showPokemon(data))
// }

// //DOM
// const pokemonList = document.querySelector(".pokemon-list");
// const pokemonBackground = document.querySelector(".pokemon-card");

// //FUNCIONES
// function showPokemon (data) {
//     //CREAR ARRAY CON LOS TIPOS DE POKEMON DE CADA UNO
//     //Esto a la vez hará que cada elemento del array cree un componente del HTML que será una img con el tipo guardado en el array
//     let pokemonTypes = data.types.map((type) => {
//         return `<img class="type-icon" src="./assets/img/pokemon-type-icons/${type.type.name}.png" alt="tipo ${type.type.name}">`
//     }).join(''); //usamos join para unir los tipos de cada pokemon en un único string
    
//     //pokemonTypes = pokemonTypes.join(''); //para juntar los dos tipos de pokemon en un string
    

//     //CREAR CADA CARD
//     const div = document.createElement("div"); //crea un elemento div
//     div.classList.add("pokemon-list"); //añade el elemento div dentro de la clase pokemon-list
//     //Crear el componente li a partir del HTML
//     div.innerHTML = `
//         <div class="pokemon-card">
//             <div class="pokemon-imagen">
//                 <img alt="imagen ${data.name}" src="${data.sprites.other["official-artwork"].front_default}">
//             </div>
//             <div class="pokemon-name">
//                 <h2>${data.name}</h2>
//             </div>
//             <div class="pokemon-numb">#${data.id} </div>
//             <div class="pokemon-types"> 
//                 ${pokemonTypes}
//             </div>
//         </div>
//     `;
//     pokemonList.append(div);
// }
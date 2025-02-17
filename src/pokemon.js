//DOM
const pokemonDetails = document.querySelector('.pokemon-container-details');

//FUNCIONES
//Para traer un pokemon
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemonCardDetails(data);
        });
}

//Para traer varios Pokemons
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemonCardDetails(pokemon) {
    const details = document.createElement('div');
    details.classList.add('pokemon-details');

    //Crea el componente pokemon-name y trae su nombre
    const name = document.createElement('p');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    //Añadimos estos elementos a la tarjeta
    details.appendChild(numberPokemon);
    details.appendChild(spriteContainer);
    details.appendChild(name);
    details.appendChild(typesPokemon);

    //Añadimos lo anterior al contenedor
    pokemonContainer.appendChild(details);
}

fetchPokemon(1);

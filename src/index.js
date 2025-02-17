//DOM
const pokemonContainer = document.querySelector('.pokemon-container');

//FUNCIONES
//Para traer un pokemon
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemonCard(data);
        });
}

//Para traer varios Pokemons
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

//Para crear la tarjeta con el Pokemon
function createPokemonCard(pokemon) {
    //Crea el componente tarjeta
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    //Crea el componente div que contiene la imagen
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('pokemon-imagen');

    //Crea el componente img y trae su imagen
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.other['official-artwork'].front_default;

    //Añadimos el elemento sprite (donde están las imágenes) a spriteContainer
    spriteContainer.appendChild(sprite);

    //Crea el componente pokemon-name y trae su nombre
    const name = document.createElement('p');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    //Crea el componente numberPokemon y trae su numero
    const numberPokemon = document.createElement('p');
    numberPokemon.classList.add('pokemon-number');
    numberPokemon.textContent = `#${pokemon.id.toString().padStart(3, 0)}`; //Añadirá hasta 3 ceros delante del nombre

    //Crea el componente tipos y los trae
    const typesPokemon = document.createElement('div');
    typesPokemon.classList.add('pokemon-types');

    pokemon.types.forEach((type) => {
        const typeImage = document.createElement('img');
        typeImage.classList.add('type-icon');
        typeImage.src = `./assets/img/pokemon-type-icons/${type.type.name}.png`;
        typeImage.alt = `Tipo ${type.type.name}`;

        typesPokemon.appendChild(typeImage); // Añadir la imagen al contenedor de tipos
    });

    //Añadimos estos elementos a la tarjeta
    card.appendChild(numberPokemon);
    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(typesPokemon);

    //Añadimos lo anterior al contenedor
    pokemonContainer.appendChild(card);
}

fetchPokemons(50);

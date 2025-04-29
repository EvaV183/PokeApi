// DOM
const pokemonContainer = document.querySelector('.pokemon-container');

// FUNCIONES
// Para traer un pokemon
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemonCard(data);
        });
}

// Para traer varios Pokemons
function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

// Para crear la tarjeta con el Pokemon
function createPokemonCard(pokemon) {
    // Crea el componente tarjeta
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    // Crea el componente div que contiene la imagen
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('pokemon-imagen');

    // Crea el componente img y trae su imagen
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.other['official-artwork'].front_default;

    // Añadimos el elemento sprite (donde están las imágenes) a spriteContainer
    spriteContainer.appendChild(sprite);

    // Crea el componente pokemon-name y trae su nombre
    const name = document.createElement('p');
    name.classList.add('pokemon-name');
    name.textContent = pokemon.name;

    // Crea el componente numberPokemon y trae su numero
    const numberPokemon = document.createElement('p');
    numberPokemon.classList.add('pokemon-number');
    numberPokemon.textContent = `#${pokemon.id.toString().padStart(3, 0)}`; //Añadirá hasta 3 ceros delante del nombre

    // Crea el componente tipos y los trae
    const typesPokemon = document.createElement('div');
    typesPokemon.classList.add('pokemon-types');

    pokemon.types.forEach((type) => {
        const typeImage = document.createElement('img');
        typeImage.classList.add('type-icon');
        typeImage.src = `./assets/img/pokemon-type-icons/${type.type.name}.png`;
        typeImage.alt = `Tipo ${type.type.name}`;
        typesPokemon.appendChild(typeImage); // Añadir la imagen al contenedor de tipos
    });

    // Añadimos estos elementos a la tarjeta
    card.appendChild(numberPokemon);
    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(typesPokemon);

    // Añadimos lo anterior al contenedor
    pokemonContainer.appendChild(card);

    // Al hacer clic se ejecuta la funcion showPokemonDetails
    card.addEventListener('click', () => {
        showPokemonDetails(pokemon.id);
    });
}

// Función que crea el modal para mostrar los detalles
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'pokemonModal';
    modal.classList.add('pokemon-modal', 'hidden');

    modal.innerHTML = `
        <div class="pokemon-modal-content">
            <span class="close-button" id="closeModal">&times;</span>
            <div id="pokemonModalContent"></div>
        </div>
    `;

    document.body.appendChild(modal);

    // Ahora que el botón está en el DOM, puedes añadirle el event listener
    document.getElementById('closeModal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
}

// Función para mostrar los detalles del Pokemon
function showPokemonDetails(id) {
    const modal = document.getElementById('pokemonModal');
    const modalContent = document.getElementById('pokemonModalContent');

    // Limpia contenido anterior
    modalContent.innerHTML = '';

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(pokemon => {
            const details = document.createElement('div');
            details.innerHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
                <p><strong>Número:</strong> #${pokemon.id.toString().padStart(3, '0')}</p>
                <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
                <p><strong>Tipos:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
            `;

            // Para que pueda mostrar los detalles
            modalContent.appendChild(details);
            modal.classList.remove('hidden');
        });
}

// LLamamos a las funciones
fetchPokemons(50);
createModal();


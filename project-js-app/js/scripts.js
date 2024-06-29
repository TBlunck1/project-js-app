let pokemonRepository = (function () {
    let pokemonList = [];
    pokemonList = [
        {id: 1, name: 'Blubasaur', height: 0.7, type: ['Grass', 'Poison']},
        {id: 2, name: 'Charzard', height: 1.7, type: ['Fire', 'Flying']},
        {id: 3, name: 'Squirtile', height: 0.5, type: 'Water'},
        {id: 4, name: 'Pidgey', height: 1, type: ['Normal', 'Flying']},
        {id: 5, name: 'Pikachu', height: 0.9, type: 'Electric'},
        {id: 6, name: 'Clefairy', height: 1.5, type: 'Fairy'},
        {id: 7, name: 'Zubat', height: 0.5, type: ['poison', 'Flying']},
        {id: 8, name: 'Psyduck', height: 1.5, type: 'Water'},
        {id: 9, name: 'Abra', height: 1.2, type: 'Psychic'},
        {id: 10, name: 'Machop', height: 1.5, type: 'Fighting'}
    ];

    function getAll() {
        return pokemonList;
    }

    // This adds a Pokemon to the list
    function add(pokemon) {
        let keys = checkKeys(pokemon);
        let length = Object.keys(pokemon).length; // Check length of the object
        // Checks to see if argument is an object 
        if (typeof pokemon !== 'object') {
            console.log('Pokemon is not an Object!');
        } else if (keys === length) {
            pokemonList.push(pokemon);
        } else {
            console.log('Wrong Keys');
        }
    }

    // This checks if the object has the right keys
    function checkKeys(pokemon) {
        let i = 0;
        Object.keys(pokemon).forEach(function (key) {
            if (key == 'name' || key == 'height' || key == 'types') {
                i++;
            } else {
                i--;
            }
        });
        return i;
    }

    function addListItem(pokemon) {
        let list = document.querySelector('ul');
        let listItem = document.createElement('li');
        let button = document.createElement('button')
        button.innerText = pokemon.name;
        button.classList.add('pokemonEntry');
        listItem.appendChild(button);
        list.appendChild(listItem);
        showDetails(button, pokemon)
    }

    function showDetails(button, pokemon) {
        button.addEventListener('click', function (event) {
            console.log(pokemon.name);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

// Print all Pokemons + height
function printPokemonList(pokemon) {
    pokemonRepository.addListItem(pokemon);
}

// Log Pokemons to console
function logPokemonList(pokemon) {
    console.log(pokemon.name + ' (height: ' + pokemon.height + ') ');
}

// Filter Pokemons by name
function filterByName(pokemonName) {
    return pokemonRepository
        .getAll()
        .filter((name) => name.name.includes(pokemonName));
}

// Log pokemonRepository
console.log(pokemonRepository.getAll());

// Add a new Pokemon
//pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: ['Electric'] });

// Print all Pokemons
pokemonRepository.getAll().forEach(printPokemonList);

// Log filtered Pokemons
filterByName('u').forEach(logPokemonList);
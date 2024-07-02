let pokemonRepository = (function () {

    let pokemons = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=30'

    function add(pokemon) {
        pokemons.push(pokemon)
    }
    
        function getAll() {
            return pokemons;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button')
        button.innerText = pokemon.name;
        button.classList.add('pokemonEntry');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        listItem.addEventListener('click', function(evenet) {
        pokemonRepository.showDetails(pokemon)
        });
    }

    function showDetails(pokemon) {
       loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }

    function loadlist() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadlist: loadlist,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadlist().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});
//A loop that will write the pokemons name and height
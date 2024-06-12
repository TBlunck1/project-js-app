let pokemonList = [
    {id: 1, name:'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {id: 2, name: 'Charzard', height: 1.7, type: ['Fire', 'Flying']},
    {id: 3, name: 'Squirtile', height: 0.5, type: 'Water'}
];

// array of all of my pokemon I have listed. The array's name is (pokemonList)

for (let i=0; i < pokemonList.length; i++) {
    //this is looping through the pokemonList
    let pokemon = pokemonList[i];
    //Declaring varibale with pokemon
    document.write(pokemon.name + '(height: ' + pokemon.height + ')');
    //Writing the pokemon name and height on the websites DOM
    if (pokemon.height > 1) {
        document.write(' - Wow, that\'s big!');
        //this conditional is looking for pokemon that is greater than 1 and saying "Wow, that's big!"
    }
    document.write('</br>');
    //creating a line break in the websites DOM with HTML
}

//this is a for loop that is looping through all the pokemon in the array (pokemonList)
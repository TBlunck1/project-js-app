let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {name: 'Charzard', height: 1.7, type: ['Fire', 'Flying']},
    {name: 'Drowzee', height: 1.0, type: 'Psychic'},
];

for (let i=0; i < pokemonList.height; i++){
    //this is a conditional for to say what to print to the console when looking up a certain pokemon height
    if (pokemonList[i].height <1.1){
        document.write(pokemonList[i].height)
        //this will only name the pokemons name and height if it is less than 1.1
    }else if (pokemonList[i].height >1.1){
        document.write(pokemonList[i].height + " Wow, that's a big pokemon!!")
        //this will say if the pokemon's height is greater than 1.1 m it will say "Wow, that's a big pokemon"
    }
}
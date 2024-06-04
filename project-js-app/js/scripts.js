let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['Grass', 'Poison']},
    {name: 'Charzard', height: 1.7, type: ['Fire', 'Flying']},
    {name: 'Drowzee', height: 1.0, type: 'Psychic'},
];

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <1.1){
        console.log(pokemonList[i].height)
    }else if (pokemonList[i].height >1.1){
        console.log(pokemonList[i].height + " Wow, that's a big pokemon!!")
    }
}
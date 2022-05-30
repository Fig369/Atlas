const pokemon = {
    pName: "Chairzard",
    pSpecies: "Flame Pokemon",
    pType1: "Fire",
    pType2: "Flying",
    pNumber: "6",
    duties: function attack: (){
        console.log("is attacking")
    }
}

function objectModule() {
    console.log(pokemon.pName);
    console.log(pokemon.pSpecies);
    console.log(pokemon.pType1);
    console.log(pokemon.pType2);
    console.log(pokemon.pNumber);
    console.log(pokemon.pNumber);
    pokemon.attack();
}

document.getElementById("pokemon").innerHTML = pokemon;
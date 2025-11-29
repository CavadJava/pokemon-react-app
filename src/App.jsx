import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Pokemon from "./components/Pokemon";

function App() {

    const pokemons = [
        {"id": "4", "name": "Charmander", "type": "fire", "count": 0},
        {"id": "7", "name": "Squirtle", "type": "water", "count": 0},
        {"id": "11", "name": "Metapod", "type": "bug", "count": 0},
        {"id": "12", "name": "Butterfree", "type": "flying", "count": 0},
        {"id": "25", "name": "Pikachu", "type": "electric", "count": 0},
        {"id": "39", "name": "Jigglypuff", "type": "normal", "count": 0},
        {"id": "94", "name": "Gengar", "type": "poison", "count": 0},
        {"id": "133", "name": "Eevee", "type": "normal", "count": 0}
    ]

    const [pokemonsList, setPokemonList] = React.useState(pokemons)

    const divStyle = {
        backgroundColor: "#84ccd8",
        margin: "10px auto",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "1000px",
        height: "800px"
    }
    const pokemonStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center"
    }


    function AddTeam(id){
        pokemonsList.map(pokemon => {
            if (Number.parseInt(pokemon.id) === Number.parseInt(id)) {
                // Ensure count doesn't drop below zero
                pokemon.count = Math.max(0, pokemon.count + 1);
                return pokemon;
            }
            return pokemon;
        })
        setPokemonList(pokemonsList);

    }

    function plus(id){

    }

    function minus(id){

    }

    return (
        <>
            <div style={divStyle}>
                <div style={pokemonStyle}>
                    {
                        pokemonsList.map((pok) => (
                            <Pokemon key={pok.id} {...pok} AddTeam={AddTeam}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default App

import React, {useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Pokemon from "./components/Pokemon";
import SelectedPokemon from "./components/SelectedPokemon.jsx";
import TablePokemon from "./components/TablePokemon.jsx";

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
    const [selectedPokemons,setSelectedPokemons] = React.useState([]);
    const [count,setCount] = useState(0)

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
        setSelectedPokemons(pokemonsList.filter((pk)=>{return pk.count>0}))
        let spTotalCount = 0;
        selectedPokemons.forEach(sp=>{
            spTotalCount+=sp.count;
        })
        setCount(spTotalCount);
    }

    function plus(id){
        const newSelectedPokemons =selectedPokemons.map((spf)=>{
                if(Number.parseInt(spf.id)===Number.parseInt(id)){
                    spf.count=spf.count+1;
                    return spf;
                }
            });
        setSelectedPokemons(newSelectedPokemons);
        console.log(newSelectedPokemons)
        let totalCount = newSelectedPokemons.reduce((total,sp)=>total+sp.count,0)
        setCount(totalCount===0?0:totalCount)
    }

    function minus(id, currentCount){
        if(currentCount===0)return;
        const newSelectedPokemons=selectedPokemons.map((spf)=>{
            if(Number.parseInt(spf.id)===Number.parseInt(id)){
                spf.count=spf.count-1;
                return spf;
            }
        });
        setSelectedPokemons(newSelectedPokemons);
        console.log(newSelectedPokemons)
        let totalCount = newSelectedPokemons.reduce((total,sp)=>total+sp.count,0)
        setCount(totalCount)
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

                <div style={{textAlign: "center",diplay: count===1 ? 'block':'none'}}>Your Pokemon Team</div>
                {
                    selectedPokemons.map((mp) => (
                        <SelectedPokemon key={mp.id} {...mp} plusAction={plus} minusAction={minus}/>
                    ))
                }
                <div style={{textAlign: "center",diplay: count===1 ? 'block':'none'}}>Total Pokémon in Team: {count}</div>
                <div style={{textAlign: "center",diplay: count===1 ? 'block':'none'}}>Individual Pokémon Count</div>

                    <table className="table">
                        <thead>
                        <tr>
                            <th>Nickname</th>
                            <th>Count</th>
                            <th>Label</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            selectedPokemons.map((sp)=>{
                                <TablePokemon key={sp.id} {...sp} />
                            })
                        }
                        </tbody>
                    </table>
            </div>
        </>
    )
}

export default App

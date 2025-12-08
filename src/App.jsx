import React, {useState} from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import SelectedPokemon from "./components/SelectedPokemon.jsx";
import TablePokemon from "./components/TablePokemon.jsx";
import PokemonDetail from "./components/PokemonDetail.jsx";

function App() {

    const pokemons = [
        {"id": "4", "name": "Charmander", "type": "fire", "count": 0,"keyId":"004","label":"Pokémons"},
        {"id": "7", "name": "Squirtle", "type": "water", "count": 0,"keyId":"007","label":"Pokémon"},
        {"id": "11", "name": "Metapod", "type": "bug", "count": 0,"keyId":"011","label":"Pokémon"},
        {"id": "12", "name": "Butterfree", "type": "flying", "count": 0,"keyId":"012","label":"Pokémon"},
        {"id": "25", "name": "Pikachu", "type": "electric", "count": 0,"keyId":"025","label":"Pokémon"},
        {"id": "39", "name": "Jigglypuff", "type": "normal", "count": 0,"keyId":"039","label":"Pokémon"},
        {"id": "94", "name": "Gengar", "type": "poison", "count": 0,"keyId":"094","label":"Pokémon"},
        {"id": "133", "name": "Eevee", "type": "normal", "count": 0,"keyId":"133","label":"Pokémon"}
    ]


    const [pokemonsList, setPokemonList] = React.useState(pokemons)
    const [selectedPokemons,setSelectedPokemons] = React.useState([]);
    const [count,setCount] = useState(0)

    const divStyle = {
        backgroundColor: "#84ccd8",
        margin: "10px auto",
        padding: "10px",
        borderRadius: "10px",
        // RESPONSIVE DÜZELTME: Genişliği %95 yaparak mobil uyumluluk sağlandı.
        width: "95%",
        maxWidth: "1000px",
        minHeight: "800px"
    }
    const pokemonStyle = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        // RESPONSIVE DÜZELTME: 'space-between' yerine 'space-around' kullanılarak mobil boşlukları daha iyi yönetildi.
        justifyContent: "space-around",
        alignItems: "center"
    }


    function calculateTotalCount(pokemons) {
        return pokemons.reduce((total, pk) => total + pk.count, 0);
    }

    function AddTeam(id){
        const updatedList = pokemonsList.map(pokemon => {
            if (Number.parseInt(pokemon.id) === Number.parseInt(id)) {
                return {...pokemon, count: pokemon.count + 1};
            }
            return pokemon;
        });

        setPokemonList(updatedList);
        const newSelected = updatedList.filter((pk) => pk.count > 0);
        setSelectedPokemons(newSelected);
        setCount(calculateTotalCount(newSelected));
    }

    function plus(id){
        const updatedSelected = selectedPokemons.map((spf) => {
            if(spf.id === id){
                return {...spf, count: spf.count + 1};
            }
            return spf;
        });

        setSelectedPokemons(updatedSelected);
        setCount(calculateTotalCount(updatedSelected));
    }

    function minus(id, currentCount){
        if(currentCount === 0) return;

        let updatedSelected = selectedPokemons.map((spf) => {
            if(spf.id === id){
                return {...spf, count: spf.count - 1};
            }
            return spf;
        });

        updatedSelected = updatedSelected.filter(pk => pk.count > 0);

        setSelectedPokemons(updatedSelected);
        setCount(calculateTotalCount(updatedSelected));

        setPokemonList(prevList => prevList.map(pk => {
            const updatedPk = updatedSelected.find(usp => usp.id === pk.id);
            return updatedPk ? updatedPk : {...pk, count: 0};
        }));
    }

    function remove(id){
        const _selectedPokemons = selectedPokemons.filter((spf) => spf.id !== id);

        setSelectedPokemons(_selectedPokemons);
        setCount(calculateTotalCount(_selectedPokemons));

        setPokemonList(prevList => prevList.map(pk => {
            if (pk.id === id) {
                return { ...pk, count: 0 };
            }
            return pk;
        }));
    }

    const visibilityStyle = {
        textAlign: "center",
        display: count > 0 ? 'block' : 'none'
    };

    return (
        <>
            <div style={divStyle}>

                <div style={pokemonStyle}>
                    {
                        pokemonsList.map((pok) => (
                            <PokemonDetail key={pok.id+pok.name} {...pok} AddTeam={AddTeam}/>
                        ))
                    }
                </div>

                <div style={visibilityStyle}>Your Pokemon Team</div>

                {
                    selectedPokemons.map((mp) => (
                        <SelectedPokemon key={mp.id+mp.name} {...mp} plusAction={plus} minusAction={minus} removeAction={remove} />
                    ))
                }

                <div style={visibilityStyle}>Total Pokémon in Team: {count}</div>
                <div style={visibilityStyle}>Individual Pokémon Count</div>

                <div className="table-responsive" style={{
                    margin: "20px 0",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}>
                    <table className="table table-striped table-secondary text-center table-hover"
                           style={{display: count > 0 ? 'table' : 'none',borderRadius: "8px",overflow: "hidden"}}>
                        <thead className="thead-light">
                        <tr>
                            <th>Nickname</th>
                            <th>Count</th>
                            <th>Label</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            selectedPokemons.map((sp) => (
                                <TablePokemon key={sp.id+sp.name} {...sp} />
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default App
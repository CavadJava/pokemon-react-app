import React from "react";

function PokemonDetail({id, keyId, name, AddTeam}) {

    if (id === undefined || id === null) {
        console.error("Pokemon ID is missing.");
        return null;
    }

    const pokemonStyle = {
        backgroundColor: "#d4e6d9",
        margin: "10px",
        borderRadius: "10px",
        maxWidth: "300px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        padding: "15px",
        height: "100%" 
    }
    return (
        <div key={id} style={pokemonStyle}>
            <img style={{width: "100px", height: "100px"}}
                 src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${keyId}.png`}/>
            <p>{name}</p>
            <button className="btn btn-primary" onClick={() => {
                AddTeam(id)
            }}>Add to Team
            </button>
        </div>
    )
}

export default PokemonDetail
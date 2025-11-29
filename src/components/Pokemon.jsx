import React from "react";

function Pokemon({id, name, AddTeam}) {

    // If id is missing, handle it gracefully
    if (id === undefined || id === null) {
        console.error("Pokemon ID is missing.");
        return null;
    }

    if (id.toString().length === 2) {
        id = "0" + id;
    } else if (id.toString().length === 1) {
        id = "00" + id;
    }


    const pokemonStyle = {
        backgroundColor: "#d4e6d9",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "300px",
        height: "200px",
        textAlign: "center"
    }
    return (
        <div key={id} style={pokemonStyle}>
            <img style={{width: "100px", height: "100px"}}
                 src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}/>
            <p>{name}</p>
            <button className="btn btn-primary" onClick={() => {
                AddTeam(id)
            }}>Add to Team
            </button>
        </div>
    )
}

export default Pokemon
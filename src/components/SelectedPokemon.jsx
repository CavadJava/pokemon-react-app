import React from "react";

function SelectedPokemon({id, name, count, plusAction, minusAction}){
    const firstStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#d4e6d9",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px"
    }
    const groupStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
    if (id === undefined || id === null) {
        console.error("Pokemon ID is missing.");
        return null;
    }

    if (id.toString().length === 2) {
        id = "0" + id;
    } else if (id.toString().length === 1) {
        id = "00" + id;
    }

    return(
        <>
            <div className="first-result" style={firstStyle}>
                <div className="pokemon-team">
                    <img style={{width: "50px", height: "50px"}}
                         src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}/>
                    <span>{name}</span>
                </div>
                <div className="button-groups" style={groupStyle}>
                    <button className="btn btn-warning" style={{color: "#FFF"}} onClick={() => {
                        minusAction(id,count)
                    }}>-</button>
                    <span>{count}</span>
                    <button className="btn btn-success" onClick={() => {
                        plusAction(id,count)
                    }}>+</button>
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        </>
    )
}

export default SelectedPokemon;
import React from "react";

function SelectedPokemon({id, keyId, name, count, plusAction, minusAction, removeAction}){
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
        gap:20,
        justifyContent: "space-between",
        alignItems: "center"
    }
    if (id === undefined || id === null) {
        console.error("Pokemon ID is missing.");
        return null;
    }

    return(
        <>
            <div className="first-result" style={firstStyle}>
                <div className="pokemon-team">
                    <img style={{width: "50px", height: "50px"}}
                         src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${keyId}.png`}/>
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
                    <button className="btn btn-danger" onClick={()=>{
                        removeAction(id)
                    }}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default SelectedPokemon;
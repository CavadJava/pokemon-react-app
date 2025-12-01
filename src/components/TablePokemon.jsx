import React from "react";

function TablePokemon({id, name, count, label}) {
    return(
        <>
            <tr key={id+name}>
                <td style={{color:"green"}}>{name}</td>
                <td style={{color:"red"}}>{count}</td>
                <td>{label}</td>
            </tr>
        </>
    )
}
export default TablePokemon
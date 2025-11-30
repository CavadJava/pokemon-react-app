import React from "react";

function TablePokemon({id, name, count, label}) {
    return(
        <>
            <tr key={id+name}>
                <td>{name}</td>
                <td>{count}</td>
                <td>{label}</td>
            </tr>
        </>
    )
}
export default TablePokemon
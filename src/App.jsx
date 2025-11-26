import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
function Pokemon({ id, name }){

    if(id.toString().length==2) {
        id = "0" + id;
    }else if(id.toString().length==1){
        id = "00"+id;
    }

    const pokemonStyle = {
        backgroundColor: "#d4e6d9",
        margin: "10px" ,
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "300px",
        height: "200px",
        textAlign: "center"
    }

    return (
        <div key={id} style={pokemonStyle}>
            <img style={{width: "100px",height: "100px"}} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}/>
            <p>{name}</p>
            <button className="btn btn-primary">Add to Team</button>
        </div>
    )
}

function Team() {
    return (
        <div>
            <h1>Team</h1>
        </div>
    )
}

function App() {

    const divStyle = {
        backgroundColor: "#84ccd8",
        margin: "10px auto" ,
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
    const pokemons = [
        { "id": 4, "name": "Charmander", "type": "fire" },
        { "id": 7, "name": "Squirtle", "type": "water"},
        { "id": 11, "name": "Metapod", "type": "bug"},
        { "id": 12, "name": "Butterfree", "type": "flying", },
        { "id": 25, "name": "Pikachu", "type": "electric", },
        { "id": 39, "name": "Jigglypuff", "type": "normal", },
        { "id": 94, "name": "Gengar", "type": "poison", },
        { "id": 133, "name": "Eevee", "type": "normal" }
    ]
  return (
    <>
      <div style={divStyle}>
          <div style={pokemonStyle}>
              {
                  pokemons.map((pok) => (
                    <Pokemon key={pok.id} {...pok}/>
                  ))
              }
          </div>
          <div style={{textAlign: "center"}}>Your Pokemon Team</div>

          <div className="first-result" style={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",backgroundColor: "#d4e6d9",borderRadius: "10px",padding: "10px",margin: "10px"}}>
              <div className="pokemon-team">
                  <img style={{width: "50px",height: "50px"}} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png`}/>
                  <span>Charmander</span>
              </div>
              <div className="button-groups" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",gap: "10px"}}>
                  <button className="btn btn-warning" style={{color:"#FFF"}}>-</button>
                  <span>1</span>
                  <button className="btn btn-success">+</button>
                  <button className="btn btn-danger">Remove</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default App

import { useState } from "react"
import Personajes from "../Personajes/Personajes"
import "./Api.css"

const HarryPotterApi = () => {
    const[personajes, setPersonajes] = useState([])
    const buscarPersonaje = () =>{
        fetch(`https://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(response => setPersonajes(response))
        .catch(err => console.error(err))
    }

    return(
        <div>
            <button onClick={buscarPersonaje}>Mostrar Personajes</button>
            <div className="contenedor">
                {personajes.map(personaje => <div className="card">
                    <Personajes name = {personaje.name} house = {personaje.house} patronus={personaje.patronus} species={personaje.species} yearOfBirth={personaje.yearOfBirth} gender={personaje.gender} image={personaje.image}/>
                </div>)}
            </div>
        </div>
    )
}

export default HarryPotterApi





const Personajes = (props) => {
    return(
        <div>
            <img src={props.image} alt={props.name} className="imgCard"/>
            <h2 className="texto">Nombre: {props.name}</h2>
            <h2 className="texto">Casa: {props.house}</h2>
            <h2 className="texto">Patronus: {props.patronus}</h2>
            <h2 className="texto">Especie: {props.species}</h2>
            <h2 className="texto">Nacimiento: {props.yearOfBirth}</h2>
            <h2 className="texto">Genero: {props.gender}</h2>
        </div>
    )
}

export default Personajes
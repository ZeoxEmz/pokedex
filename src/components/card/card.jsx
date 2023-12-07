/* eslint-disable react/prop-types */
import styles from "./card.module.css"
import { TypesColor } from "../../styles/pokemonTypeStyles"
import { Link } from "react-router-dom"

export function Card ({id,name,types,image}) {

    return(
        <div className={styles.card}>
            
            <Link to={`/detail/${id}`} className={styles.link}>
                <h3 className={styles.pokemon_name}>{name}</h3>
                <img src={image} alt={`imagen de ${name}`} />
            </Link>

            <h4 className={styles.types_title}>types:</h4>

            <div className={styles.types}>
                {types.map((type,key)=>(
                    <p className={`${styles.type} ${TypesColor[type]}`} key={key}>{type}</p>
                ))}
            </div>

        </div>
    )
}
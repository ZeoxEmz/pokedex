/* eslint-disable react/prop-types */
import { Card } from "../card/card"
import styles from "./cards.module.css"

export function Cards({pokemons,isLoading}) {
    if(isLoading) return <p>loading...</p>
    return(
        <div className={styles.cards}>
            {pokemons.length > 0 && pokemons.map(({id,name,weight,height,types,image})=>(
                <Card 
                    key={id}
                    id={id}
                    name={name}
                    weight={weight}
                    height={height}
                    types={types}
                    image={image}
                />
            ))}
        </div>
    )
}
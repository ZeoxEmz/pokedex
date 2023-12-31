import styles from "./SearchBar.module.css"
import buscar from "../../../images/Search.svg"
import snorlax from "../../../images/snorlax.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../redux/action"

export function SearchBar() {
    const dispatch = useDispatch()

    const [name,setName] = useState("")

    const handleInputChange = (event)=>{
        setName(event.target.value.toLowerCase())
    }
    const handleKeyPress = (event) => {
        // Verificar si la tecla presionada es Enter (código 13)
        if (event.key === "Enter") {
          SearchPokemon();
        }
    };
    const SearchPokemon = ()=>{
        dispatch(getPokemons({name}))
    }

    return(
        <div className={styles.divSearch}>
            <img className={styles.snorlax} src={snorlax} alt="imagen del pokemon snorlax" />
            <input onKeyDown={handleKeyPress} name="name" placeholder="Pikachu,Snorlax,Ratata..." onChange={handleInputChange} className={styles.input} type="text" />
            <button title="Haga clic para buscar el pokemon" onClick={SearchPokemon} className={styles.button}><img className={styles.search} src={buscar} alt="Buscar Pokemon" /></button>
        </div>
    )
}
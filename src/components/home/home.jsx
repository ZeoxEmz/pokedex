import { Cards } from "../cards/cards";
import { NavBar } from "../navBar/navBar";
import styles from "./home.module.css"
import { SearchBar } from "../searchBar/searchBar";
import { UseScreen } from "./useScreen";
import { UsePagination } from "./hooks/UsePagination";
import { UseOrd } from "./hooks/UseOrd";
import { UsePokemonsData } from "./hooks/UsePokemonsData";




export function Home() {
    const {small} = UseScreen() // hook para posicionar el searchBar
    const { ord, handleOrderChange } = UseOrd()
    const {nextPage,prevPage,isLoading} = UsePagination({ord})
    const pokemons = UsePokemonsData({ord})


    return(
        <div className={styles.home}>
            
            <NavBar small={small}/>

            <div className={styles.divHero}>

                <div className={styles.filterDiv}>
                    <select id="select" onChange={handleOrderChange} title="Seleccionar Orden">
                        <option value="">Orden</option>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>

                {small && <SearchBar/>}

                {pokemons.length > 0 && <Cards isLoading={isLoading} pokemons={pokemons}/>}

                <div className={styles.buttons_div}>
                    <button type="button" className={styles.button} onClick={prevPage}>prevPage</button>
                    <button type="button" className={styles.button} onClick={nextPage}>nextPage</button>
                </div>

            </div>
        </div>
    )
}
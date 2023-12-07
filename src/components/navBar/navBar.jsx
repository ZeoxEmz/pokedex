import { Link } from "react-router-dom"
import pokeball from "../../../images/pokeball.png"
import styles from "./navBar.module.css"
import { SearchBar } from "../searchBar/searchBar"

export function NavBar({small}) {

    return(
        <div className={styles.navBar}>
            <Link to="/" className={styles.inicio} title="inicio">
                <img className={styles.pokeball} src={pokeball} alt="Ir al inicio" />
                <h3 className={styles.inicio_title}>Pokedex</h3>
            </Link>
            
            {!small && <SearchBar/>}

            <div>
                <Link className={styles.create} to="/crear">Crea tu pokemon</Link>
            </div>
        </div>
    )
}
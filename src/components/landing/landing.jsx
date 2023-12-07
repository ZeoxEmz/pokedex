import styles from "./landing.module.css"
import img from "../../../images/pokedex.png"
import gif from "../../../images/pikachu.gif"
import { Link } from "react-router-dom"

export function Landing() {
    return(
        <div className={styles.landing}>
            <div className={styles.welcome}>
                <h1 className={styles.landing_title}>¡Bienvenido a Pokedex Insight!</h1>
                <p className={styles.landing_p}>
                    ¡Explora el mundo Pokémon con nuestra Pokedex! Entra ahora y descubre la magia en tus manos. ¡Atrápalos a todos con un solo toque! 📲🌟
                </p>
            </div>
            <div className={styles.div_pokedex}>
                <img className={styles.pokedex} src={img} alt="imagen de pokedex" />
                <img className={styles.pikachu} src={gif} alt="gif de pikachu corriendo" />
                <Link className={styles.entrar} to="/home">Entrar</Link>
            </div>

        </div>
    )
}
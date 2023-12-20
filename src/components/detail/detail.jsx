import styles from "./detail.module.css"
import { TypesColor } from "../../styles/pokemonTypeStyles"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { clearDetail, getDetail } from "../../redux/action"
import back from "../../../images/back.svg"


export function Detail() {
        const {id} = useParams()    
        const dispatch = useDispatch()
        const pokemon = useSelector(state=>state.detail)
        
        useEffect(()=>{
            dispatch(getDetail(id))
            return ()=>{
                dispatch(clearDetail())
            }
        },[dispatch,id])

        if (Object.keys(pokemon).length === 0) return <p className={styles.loading}>Cargando...</p>

        const {name,height,weight,types,image,attack,defense,hp,specialAttack,specialDefense,speed} = pokemon
        const stats = [{height},{weight},{attack},{defense},{hp},{specialAttack},{specialDefense},{speed}]
        
    return(
        <div className={styles.detail}>
            
                <Link to="/home"><img className={styles.link_img} src={back} alt="volver al home" /></Link>
                <h1 className={styles.pokemon}>{name} N.° {id}</h1>
                
                <div className={styles.mid}>

                    <img className={styles.detail_img} src={image} alt={`imagen de ${name}`} />

                    <div className={styles.table}>
                        {stats.map((stat,key)=>{
                            const [statName,statValue] = Object.entries(stat)[0]
                                
                            return(
                                <div className={styles.rows} key={key}>
                                    <span>{statName}</span>
                                    <p className={styles.value}>{statValue}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={styles.types}>
                    {types.map((type,key)=>{
                        return (<h2  className={`${styles.type} ${TypesColor[type]}`} key={key}>{type}</h2>)
                    })}
                </div>

            </div>
    )
}
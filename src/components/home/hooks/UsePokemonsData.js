import { useEffect } from "react"
import { getPokemons } from "../../../redux/action"
import { useDispatch, useSelector } from "react-redux"

export const UsePokemonsData = ({ord})=>{
    const pokemons = useSelector(state=>state.pokemons)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons({ord}))
    },[ord, dispatch])

    return pokemons
}
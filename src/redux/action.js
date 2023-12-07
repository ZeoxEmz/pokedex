import axios from "axios"
import urlBase from "../utils/urlBase"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"

export const getPokemons = ({name,ord,offset,limit})=>{
    return async function (dispatch) {
        try {
            let url = `${urlBase.defaults.baseURL}/pokemons`;
            const params = []
            name && params.push(`name=${name}`)
            ord && params.push(`ord=${ord}`)
            offset && params.push(`offset=${offset}`)
            limit && params.push(`limit=${limit}`)
            if(params.length > 0) url += `?${params.join("&")}`

            const response = await axios.get(url)

            name 
            ? dispatch({type:GET_POKEMON_BY_NAME,payload:response.data})
            : dispatch({type:GET_POKEMONS,payload:response.data})
        } catch (error) {
            console.error('Error fetching Pokemon:', error.message);
        }
    }
}

export const getDetail = (id)=>{
    return async function (dispatch) {
        try {
            const response = await axios.get(`${urlBase.defaults.baseURL}/pokemons/${id}`)
            dispatch({type:GET_DETAIL,payload:response.data})
        } catch (error) {
            console.error(error.message)
        }
    }
}
export const clearDetail = ()=>{
    return function (dispatch) {
        dispatch({type:CLEAR_DETAIL})
    }
}
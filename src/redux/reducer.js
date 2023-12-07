import { CLEAR_DETAIL, GET_DETAIL, GET_POKEMONS, GET_POKEMON_BY_NAME } from "./action"

const initialState = {
    pokemons: [],
    detail:{}
}

const rootReducer = (state=initialState,action)=>{

    switch (action.type) {
        case GET_POKEMONS: return {...state, pokemons: action.payload}
        case GET_POKEMON_BY_NAME: return {...state, pokemons:[action.payload]}
        case GET_DETAIL: return {...state,detail:action.payload}
        case CLEAR_DETAIL: return {...state, detail:{}}
    
        default: return {...state}
    }
}

export default rootReducer
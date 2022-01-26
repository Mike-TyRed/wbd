import {FETCH_POKEMON_REQUEST,FETCH_POKEMON_SUCESS,FETCH_POKEMON_FAILURE } from "../actions/buscadorAction";

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

const buscador = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCESS:
            return {
                loading: false,
                pokemon: action.payload,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            }
        default: return state;
    }
}

export default buscador;
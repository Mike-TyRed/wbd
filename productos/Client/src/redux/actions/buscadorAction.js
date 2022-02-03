//import Axios from "axios";

export const FETCH_PRODUCTO_REQUEST = 'FETCH_PRODUCTO_REQUEST';
export const FETCH_PRODUCTO_SUCESS = 'FETCH_PRODUCTO_SUCESS';
export const FETCH_PRODUCTO_FAILURE = 'FETCH_PRODUCTO_FAILURE';

//##### ACTIONS

export const fetchProductoRequest = () => {
    return {
        type: FETCH_PRODUCTO_REQUEST
    }
}

export const fetchProductoSucess = (Producto) => {
    return {
        type: FETCH_PRODUCTO_SUCESS,
        payload: Producto
    }
}

export const fetchProductoFailure = (error) => {
    return {
        type: FETCH_PRODUCTO_FAILURE,
        payload: error
    }
}

/* fetchProducto = (valor) => {
    return (dispatch) => {
        dispatch(fetchProductoRequest());
        Axios.get(``)
    }
} */




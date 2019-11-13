import * as types from './actionTypes';

import {saveCart, getCart} from '../../utils/localStorage';

const getCarts = (carts) => {
    return {
        type: types.GET_CART,
        carts
    }
}

const getTotal = () => {
    return {
        type: types.TOTAL_MONEY,
    }
}

const addtocarts = (product) => {
    return {
        type: types.ADD_PRODUCT_TO_CART,
        product
    }
}

export const removeAllCarts = () => {
    return {
        type: types.REMOVE_ALL_CART
    }
}

export const removeAllCart = () => {
    return async (dispatch) => {
        await saveCart([]);
        dispatch(removeAllCarts());
    }
}

export const addProductToCart = (product) => {
    return async (dispatch, getState) => {
        const state = getState;
        dispatch(addtocarts(product));
        let carts = state().cartReducers.carts;
        console.log("product" + JSON.stringify(carts));

        dispatch(getTotal(carts));
        await saveCart(carts);
    }
}

const decrquan = (id) => {
    return {
        type: types.DECR_QUANTITY,
        id
    }
}
export const decrQuantity = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        let carts = state.cartReducers.carts;
        dispatch(decrquan(id));
        await saveCart(carts);
        dispatch(getTotal(carts));

    }
}
const incrquan = (id) => {
    return {
        type: types.INCR_QUANTITY,
        id
    }
}
export const incrQuantity = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        let carts = state.cartReducers.carts;
        dispatch(incrquan(id));
        await saveCart(carts);
        dispatch(getTotal(carts));
    }
};
const remove = (id) => {
    return {
        type: types.REMOVE_PRODUCT_TO_CART,
        id
    }
}
export const removeFromCart = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        let carts = state.cartReducers.carts;
        carts.filter(e => e.product.id !== id);
        dispatch(remove(id));
        await saveCart(carts);
        dispatch(getTotal(carts));
    }
}

export const getDataCart = () => {
    return (dispatch) => {
        getCart().then(carts => {
            dispatch(getCarts(carts));
            dispatch(getTotal(carts));
        });
    }
}

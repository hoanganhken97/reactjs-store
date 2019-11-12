import * as types from './actionTypes';
export function getCart() {
    return (dispatch) => {
        dispatch({
            type: types.GET_CART_SUCCESS
        });
    }
}

export function addToCart(product, quantity) {
    return (dispatch) => {
        const cartItem = {
            "id": product.id,
            "image": product.image[0],
            "name": product.name,
            "quantity": quantity,
            "price":product.price
        }
        console.log('addcart action: '+JSON.stringify(cartItem))
        dispatch({
            type: types.ADD_TO_CART_SUCCESS,
            item: cartItem
        });
    }   
}

export function removeFromCart(item) {
    return (dispatch) => {
        dispatch({
            type: types.REMOVE_FROM_CART_SUCCESS,
            item: item
        });
    }
}
import * as types from './actionTypes';
import firebase from '../../utils/firebaseConfig';

const db = firebase.database();

//home

export const ListdataProduct = () => {
    return (dispatch) => {
        db.ref('product').on('value', snapshot => {
            dispatch({type: types.FETCH_PRODUCTS_LIST, data: Object.values(snapshot.val())});
        });
    };
};

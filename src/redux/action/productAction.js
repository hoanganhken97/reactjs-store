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
//category
export const Category =()=>{
    return(dispatch) =>{
        db.ref('category').on('value',snapshot =>{
            dispatch({type:types.CATEGORY,category:Object.values(snapshot.val())})
        })
    }
}
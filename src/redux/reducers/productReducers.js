import * as types from '../action/actionTypes';

const initialState = {
    items: [],
    news: [],
    product: [],
    maps: [],
    isFetching: false,
    error: false,
    category:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS_LIST:
            return {
                ...state,
                product: action.data
            };
            case types.CATEGORY:
                return{
                    ...state,
                    category:action.category
                }
        default:
            return state
    }
}

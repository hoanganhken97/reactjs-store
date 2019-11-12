import * as types from '../action/actionTypes';

const initialState = {
    items: [],
    news: [],
    product: [],
    maps: [],
    isLoading: true,
    error: false,
    category:[]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS_LIST:
            return {
                ...state,
                product: action.data,
                isLoading:action.isLoading,
            };
            case types.CATEGORY:
                return{
                    ...state,
                    category:action.category,
                    isLoading:action.isLoading,
                }
        default:
            return state
    }
}

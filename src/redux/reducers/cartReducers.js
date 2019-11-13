import * as types from '../action/actionTypes';

const DEFAULT = {
  carts: [],
  totalMoney: '',
};

export default (state = DEFAULT, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      let newCarts = [];
      let isExist = state.carts.some(e => e.product.id === action.product.id);
      console.log('isExist: ' + isExist);
      if (isExist) {
        newCarts = state.carts;
        // thêm vào giỏ hàng khi san phâm đã có
        return {
          ...state,
          carts: state.carts.map(e => {
            if (e.product.id !== action.id)
              return {product: e.product, quantity: e.quantity + 1};
            return e;
          }),
        };
      } else {
        newCarts = state.carts.concat({product: action.product, quantity: 1});
      }
      return {
        ...state,
        carts: newCarts,
      };
    case types.REMOVE_PRODUCT_TO_CART:
      return {
        ...state,
        carts: state.carts.filter(e => e.product.id !== action.id),
      };
    case types.DECR_QUANTITY:
      return {
        ...state,
        carts: state.carts.map(e => {
          if (e.product.id !== action.id) return e;
          if (e.quantity === 1) return e;
          return {product: e.product, quantity: e.quantity - 1};
        }),
      };
    case types.INCR_QUANTITY:
      return {
        ...state,
        carts: state.carts.map(e => {
          if (e.product.id !== action.id) return e;
          return {product: e.product, quantity: e.quantity + 1};
        }),
      };
    case types.TOTAL_MONEY:
      const total =
        state.carts.length > 0
          ? state.carts
              .map(e => e.product.price * e.quantity)
              .reduce((a, b) => a + b)
          : 0;
      return {
        ...state,
        totalMoney: total,
      };
    case types.GET_CART:
      return {
        ...state,
        carts: action.carts,
      };
    case types.REMOVE_ALL_CART:
      return {
        ...state,
        carts: [],
        totalMoney: '',
      };
    default:
      return state;
  }
};

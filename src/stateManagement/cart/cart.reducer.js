import { ActionType } from '../state.constants';
import { addItemToCart, removeItemFromCart } from './cart.reducer.utils';

const INITIAL_STATE = { hidden: true, cartItems: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.TOGGLE_MINI_CART:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case ActionType.ADD_ITEM: {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        }
        case ActionType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item => item.id !== action.payload.id,
                ),
            };
        case ActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

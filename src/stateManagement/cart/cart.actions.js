import { ActionType } from '../state.constants';

export const toggleMiniCart = () => ({
    type: ActionType.TOGGLE_MINI_CART,
});

export const addItem = item => ({
    type: ActionType.ADD_ITEM,
    payload: item,
});

export const removeItem = item => ({
    type: ActionType.REMOVE_ITEM,
    payload: item,
});

export const clearItemFromCart = item => ({
    type: ActionType.CLEAR_ITEM_FROM_CART,
    payload: item,
});

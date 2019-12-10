import { combineReducers } from 'redux';
import user from './users/user.reducer';
import cart from './cart/cart.reducer';

export default combineReducers({
    user,
    cart,
});

import { combineReducers } from 'redux';
import user from './users/user.reducer';
import cart from './cart/cart.reducer';
import directory from './directory/directory.reducer';
import shop from './shop/shop.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const rootReducer = combineReducers({
    user,
    cart,
    directory,
    shop,
});

export default persistReducer(persistConfig, rootReducer);

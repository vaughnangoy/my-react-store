import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [logger];

export default createStore(rootReducer, applyMiddleware(...middleware));

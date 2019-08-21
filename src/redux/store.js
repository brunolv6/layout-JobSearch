import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

import combineReducers from './root-reducer'

const middlewares = [logger]

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;